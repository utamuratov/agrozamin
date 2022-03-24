import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select } from '@ngxs/store';
import {
  TransferChange,
  TransferItem,
  TransferSelectChange,
} from 'ng-zorro-antd/transfer';
import {
  Language,
  LanguageState,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { map, Observable, takeUntil } from 'rxjs';
import { AccessActionResponse } from '../../access-action/models/access-action.response';
import { AccessControlResponse } from '../../access-control/models/access-control.response';
import { Access } from '../models/access.interface.ts';
import { Role } from '../models/role.interface';
import { RoleResponse } from '../models/role.response';
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
  private _accessControls: AccessControlResponse[] = [];
  public get accessControls(): AccessControlResponse[] {
    return this._accessControls;
  }
  @Input()
  public set accessControls(v: AccessControlResponse[]) {
    this._accessControls = v;
    this.transferingAccessControls = this.makeTransferingAccessControls(
      this.accessControls
    );
  }

  /**
   *
   */
  private _accessActions: AccessActionResponse[] = [];
  public get accessActions(): AccessActionResponse[] {
    return this._accessActions;
  }
  @Input()
  public set accessActions(v: AccessActionResponse[]) {
    this._accessActions = v;
    //  this.transferingAccessControls = [];
  }

  /**
   *
   */
  private _editingData?: RoleResponse;
  @Input()
  public set editingData(v: RoleResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): RoleResponse | undefined {
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
  transferingAccessControls: TransferItem[] = [];

  /**
   *
   */
  transferingAccessActions: TransferItem[] = [];

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
  initForm(model?: Role) {
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
  private addDescriptionControls(model?: Role) {
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
  makeTransferingAccessControls(
    accessControls: AccessControlResponse[]
  ): TransferItem[] {
    const transferItems: TransferItem[] = [];
    accessControls.forEach((accessControl) => {
      transferItems.push({
        key: accessControl.id,
        title: accessControl.key,
        direction: (this.form.get('access')?.value as Access[])?.find(
          (w) => w.access_control_id === accessControl.id
        )
          ? 'right'
          : 'left',
      });
    });

    return transferItems;
  }

  /**
   *
   */
  getTransferingAccessActions(
    accessActions: AccessActionResponse[],
    accessControlKey: number
  ): TransferItem[] {
    const transferItems: TransferItem[] = [];
    // const accessAction = this.transferingAccessControls.find(w => w. == accessControlKey)
    accessActions.forEach((accessAction) => {
      transferItems.push({
        key: accessAction.id,
        title: accessAction.key,
        direction: (this.form.get('access')?.value as Access[])?.find(
          (w) =>
            w.access_control_id === accessControlKey &&
            w.access_action_id.find((t) => t === accessAction.id)
        )
          ? 'right'
          : 'left',
      });
    });

    return transferItems;
  }

  selectChangeAccessControls(data: TransferSelectChange) {
    this.transferingAccessControls.forEach((w) => {
      if (w['key'] !== data.item?.['key']) {
        w.checked = false;
      }
    });
    this.transferingAccessControls = [...this.transferingAccessControls];

    if (data.checked && data.direction === 'right') {
      this.transferingAccessActions = this.getTransferingAccessActions(
        this.accessActions,
        data.item?.['key']
      );
    } else {
      this.transferingAccessActions = [];
    }
  }

  changedAccessControlPosition(data: TransferChange) {
    this.transferingAccessControls = [...this.transferingAccessControls];
    if (data.from === 'right') {
      this.transferingAccessActions = [];
    }

    const access = this.form.get('access');
    const value: Access[] = access?.value ?? [];
    if (data.from === 'left') {
      value.push({
        access_control_id: data.list[0]['key'],
        access_action_id: [],
      } as Access);
      access?.setValue(value);
    } else {
      access?.setValue(
        value.filter((w) => w.access_control_id !== data.list[0]['key'])
      );
    }

    console.log(access);
    console.log(this.form);
  }

  changedAccessActionPosition(data: TransferChange) {
    // this.transferingAccessControls = [...this.transferingAccessControls];
    // if (data.from === 'right') {
    //   this.transferingAccessActions = [];
    // }
    const selectedAccessControl = this.transferingAccessControls.find(
      (w) => w.checked && w.direction === 'right'
    );
    if (!selectedAccessControl) {
      return;
    }

    const access = this.form.get('access');
    const value: Access[] = access?.value ?? [];
    const actions = value.find(
      (access) => access.access_control_id === selectedAccessControl['key']
    );

    if (actions) {
      actions.access_action_id = this.transferingAccessActions
        .filter((action) => action.direction === 'right')
        .map((t) => t['key']);
    }

    console.log(access);
    console.log(actions);
    console.log(this.form);
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
    // request.access = this.transferingAccessControls.map((w) => {return {access_control_id: w['key'], access_action_id: }})
    if (this.editingData?.id) {
      this.edit(this.editingData.id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   */
  private add(request: Role) {
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
  private edit(id: number, request: Role) {
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
