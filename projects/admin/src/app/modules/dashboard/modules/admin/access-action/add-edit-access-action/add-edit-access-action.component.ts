import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { AccessActionService } from '../access-action.service';
import { AccessAction } from '../models/access-action.interface';
import { AccessActionResponse } from '../models/access-action.response';

@Component({
  selector: 'az-add-edit-access-action',
  templateUrl: './add-edit-access-action.component.html',
  styleUrls: ['./add-edit-access-action.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAccessActionComponent extends BaseAddEditComponent<
  AccessActionResponse,
  AccessAction
> {
  /**
   *
   * @param fb
   * @param $accessAction
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected $accessAction: AccessActionService
  ) {
    super(fb, $accessAction, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: AccessActionResponse) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      description: this.fb.group({}),
    });
  }
}
