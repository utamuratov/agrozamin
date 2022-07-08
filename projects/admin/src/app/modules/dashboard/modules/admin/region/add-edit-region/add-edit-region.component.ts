import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { RegionRequest } from '../dto/region.request';
import { RegionResponse } from '../dto/region.response';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'az-add-edit-region',
  templateUrl: './add-edit-region.component.html',
  styleUrls: ['./add-edit-region.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditRegionComponent extends BaseAddEditComponent<
  RegionResponse,
  RegionRequest
> {
  /**
   *
   * @param fb
   * @param $region
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected $region: RegionService
  ) {
    super(fb, $region, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: RegionResponse) {
    this.form = this.fb.group({
      name: this.fb.group({}),
    });
  }
}
