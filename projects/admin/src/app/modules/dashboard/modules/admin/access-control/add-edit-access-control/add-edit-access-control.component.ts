import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select } from '@ngxs/store';
import {
  Language,
  LanguageState,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { map, Observable, takeUntil, tap } from 'rxjs';
import { AccessControlService } from '../access-control.service';
import { AccessControlAction } from '../models/access-control-action.interface';
import { AccessControl } from '../models/access-control.interface';
import { AccessControlResponse } from '../models/access-control.response';

@Component({
  selector: 'az-add-edit-access-control',
  templateUrl: './add-edit-access-control.component.html',
  styleUrls: ['./add-edit-access-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAccessControlComponent {
  /**
   *
   */
  @Input()
  public isVisible!: boolean;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  private _editingData?: AccessControlResponse<number>;
  @Input()
  public set editingData(v: AccessControlResponse<number> | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): AccessControlResponse<number> | undefined {
    return this._editingData;
  }

  /**
   *
   */
  @Output()
  modified = new EventEmitter();

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  accessAction$!: Observable<AccessControlAction[]>;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param fb
   * @param $accessControl
   */
  constructor(
    private fb: FormBuilder,
    private $destroy: NgDestroy,
    private $accessControl: AccessControlService
  ) {
    this.loadAccessAction();
  }

  /**
   *
   */
  private init() {
    this.initForm(this.editingData);
  }

  /**
   *
   * @param model
   */
  initForm(model?: AccessControlResponse<number>) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      url: [model?.url],
      description: this.fb.group({}),
      actions: [model?.actions, Validators.required],
    });

    this.addDescriptionControls(model);
  }

  /**
   *
   * @param model
   */
  private addDescriptionControls(model?: AccessControlResponse<number>) {
    this.language$.pipe(takeUntil(this.$destroy)).subscribe((languages) => {
      languages.forEach((language) => {
        (this.form.get('description') as FormGroup)?.addControl(
          language.code,
          new FormControl(
            model?.description[language.code],
            Validators.required
          )
        );
      });
    });
  }

  /**
   *
   */
  loadAccessAction() {
    this.accessAction$ = this.$accessControl
      .getActions()
      .pipe(takeUntil(this.$destroy))
      .pipe(map((w) => w.data));
  }

  /**
   *
   * @returns
   */
  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.form.getRawValue();
    if (this.editingData?.id) {
      this.edit(this.editingData.id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   */
  private add(request: AccessControl) {
    this.$accessControl
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
            this.initForm();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private edit(id: number, request: AccessControl) {
    this.$accessControl
      .edit(id, request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
            this.initForm();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  close(): void {
    this.isVisibleChange.emit(false);
  }
}
