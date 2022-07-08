import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { RejectReasonRequest } from '../dto/reject-reason.request';
import { RejectReasonResponse } from '../dto/reject-reason.response';
import { RejectReasonService } from '../service/reject-reason.service';

@Component({
  selector: 'az-add-edit-reject-reason',
  templateUrl: './add-edit-reject-reason.component.html',
  styleUrls: ['./add-edit-reject-reason.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditRejectReasonComponent extends BaseAddEditComponent<
  RejectReasonResponse,
  RejectReasonRequest
> {
  /**
   *
   * @param fb
   * @param $region
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected override $data: RejectReasonService
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: RejectReasonResponse) {
    this.form = this.fb.group({
      content: this.fb.group({}),
    });
  }
}
