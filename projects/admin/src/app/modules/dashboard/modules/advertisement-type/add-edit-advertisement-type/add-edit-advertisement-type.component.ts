import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { AdvertisementTypeRequest } from '../dto/advertisement-type.request';
import { AdvertisementTypeResponse } from '../dto/advertisement-type.response';
import { AdvertisementTypeService } from '../services/advertisement-type.service';

@Component({
  selector: 'az-add-edit-advertisement-type',
  templateUrl: './add-edit-advertisement-type.component.html',
  styleUrls: ['./add-edit-advertisement-type.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAdvertisementTypeComponent extends BaseAddEditComponent<
  AdvertisementTypeResponse,
  AdvertisementTypeRequest
> {
  /**
   *
   * @param fb
   * @param $region
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected $adv: AdvertisementTypeService
  ) {
    super(fb, $adv, $destroy);
  }

  /**
   *
   */
  override initForm() {
    this.form = this.fb.group({
      name: this.fb.group({}),
    });
  }
}
