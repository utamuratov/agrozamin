import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
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
  LanguageState,
  Language,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { map, Observable, takeUntil } from 'rxjs';
import { AccessActionService } from '../access-action.service';
import { AccessAction } from '../models/access-action.interface';
import { AccessActionResponse } from '../models/access-action.response';

@Component({
  selector: 'az-add-edit-access-action',
  templateUrl: './add-edit-access-action.component.html',
  styleUrls: ['./add-edit-access-action.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAccessActionComponent {
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
  private _editingData?: AccessActionResponse;
  @Input()
  public set editingData(v: AccessActionResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): AccessActionResponse | undefined {
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
  form!: FormGroup;

  /**
   *
   * @param fb
   * @param $accessAction
   */
  constructor(
    private fb: FormBuilder,
    private $destroy: NgDestroy,
    private $accessAction: AccessActionService
  ) {}

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
  initForm(model?: AccessActionResponse) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      description: this.fb.group({}),
    });

    this.addDescriptionControls(model);
  }

  /**
   *
   * @param model
   */
  private addDescriptionControls(model?: AccessActionResponse) {
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
   * @returns
   */
  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.form.getRawValue();
    if (this.editingData?.id) {
      this.editTranslation(this.editingData.id, request);
      return;
    }
    this.addAccessAction(request);
  }

  /**
   *
   */
  private addAccessAction(request: AccessAction) {
    this.$accessAction
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
          }

          return false;
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private editTranslation(id: number, request: AccessAction) {
    return this.$accessAction
      .edit(id, request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
          }

          return false;
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
