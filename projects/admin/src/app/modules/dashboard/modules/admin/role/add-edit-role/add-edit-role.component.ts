import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select } from '@ngxs/store';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import {
  Language,
  LanguageState,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { map, Observable, takeUntil } from 'rxjs';
import { AddEditRole } from '../models/add-edit-role.interface';
import { RoleService } from '../role.service';

@Component({
  selector: 'az-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.less'],
})
export class AddEditRoleComponent {
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
  private _controlAction: NzTreeNodeOptions[] = [];
  public get controlAction(): NzTreeNodeOptions[] {
    return this._controlAction;
  }
  @Input()
  public set controlAction(v: NzTreeNodeOptions[]) {
    this._controlAction = v;
  }

  /**
   *
   */
  private _editingData?: AddEditRole<string>;
  @Input()
  public set editingData(v: AddEditRole<string> | undefined) {
    this._editingData = v;
    console.log(v);

    this.init();
  }
  public get editingData(): AddEditRole<string> | undefined {
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
    private $role: RoleService
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
  initForm(model?: AddEditRole<string>) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      description: this.fb.group({}),
      access: [model?.access, Validators.required],
    });

    this.addDescriptionControls(model);
  }

  /**
   *
   * @param model
   */
  private addDescriptionControls(model?: AddEditRole<string>) {
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

    const formRawValue: AddEditRole<string> = this.form.getRawValue();
    const request: AddEditRole<number> = {
      ...formRawValue,
      access: this.getControlActionIds(formRawValue.access),
    };

    if (this.editingData?.id) {
      this.edit(this.editingData.id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   * @param controlActionIds e.g. 'controlId-controlActionId' => '1-2', or 'controlId' => '1'
   * @returns
   */
  private getControlActionIds(controlActionIds: string[]) {
    const ids: number[] = [];
    controlActionIds.forEach((value: string) => {
      const splitted = value.split(AdminConstants.SPLITTER_FOR_TREE);
      if (splitted.length > 1) {
        ids.push(+splitted[1]);
      } else {
        const actions = this.controlAction.find(
          (w) => w.key === value
        )?.children;

        actions?.forEach((action) => {
          ids.push(+action.key.split(AdminConstants.SPLITTER_FOR_TREE)[1]);
        });
      }
    });
    return ids;
  }

  /**
   *
   */
  private add(request: AddEditRole) {
    this.$role
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
  private edit(id: number, request: AddEditRole) {
    return this.$role
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
