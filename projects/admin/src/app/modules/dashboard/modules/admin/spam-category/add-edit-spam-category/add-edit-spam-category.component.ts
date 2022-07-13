import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { SpamCategoryRequest } from '../dto/spam-category.request';
import { SpamCategoryResponse } from '../dto/spam-category.response';
import { SpamCategoryService } from '../services/spam-category.service';

@Component({
  selector: 'az-add-edit-spam-category',
  templateUrl: './add-edit-spam-category.component.html',
  styleUrls: ['./add-edit-spam-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditSpamCategoryComponent extends BaseAddEditComponent<
  SpamCategoryResponse,
  SpamCategoryRequest
> {
  /**
   *
   * @param fb
   * @param $region
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected override $data: SpamCategoryService
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: SpamCategoryResponse) {
    this.form = this.fb.group({
      content: this.fb.group({}),
    });
  }
}
