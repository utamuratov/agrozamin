import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { AddEditRole } from '../models/add-edit-role.interface';
import { RoleService } from '../role.service';

@Component({
  selector: 'az-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.less'],
})
export class AddEditRoleComponent extends BaseAddEditComponent<
  AddEditRole<string>,
  AddEditRole<number>
> {
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
   * @param fb
   * @param $accessAction
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected override $data: RoleService
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: AddEditRole<string>) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      description: this.fb.group({}),
      access: [model?.access, Validators.required],
    });
  }

  /**
   *
   * @returns
   */
  override getRequest() {
    const formRawValue: AddEditRole<string> = this.form.getRawValue();
    const request: AddEditRole<number> = {
      ...formRawValue,
      access: this.getControlActionIds(formRawValue.access),
    };
    return request;
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
}
