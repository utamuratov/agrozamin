import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { ComplaintCategoryRequest } from '../dto/complaint-category.request';
import { ComplaintCategoryResponse } from '../dto/complaint-category.response';
import { ComplaintCategoryService } from '../services/complaint-category.service';

@Component({
  selector: 'az-add-edit-complaint-category',
  templateUrl: './add-edit-complaint-category.component.html',
  styleUrls: ['./add-edit-complaint-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditComplaintCategoryComponent extends BaseAddEditComponent<
  ComplaintCategoryResponse,
  ComplaintCategoryRequest
> {
  /**
   *
   * @param fb
   * @param $region
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected override $data: ComplaintCategoryService
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: ComplaintCategoryResponse) {
    this.form = this.fb.group({
      content: this.fb.group({}),
    });
  }
}
