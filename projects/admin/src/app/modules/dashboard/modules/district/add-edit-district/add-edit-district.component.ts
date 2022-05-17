import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { Observable } from 'rxjs';
import { RegionResponse } from '../../region/dto/region.response';
import { DistrictRequet } from '../dto/district.request';
import { DistrictResponse } from '../dto/district.response';
import { DistrictService } from '../services/district.service';

@Component({
  selector: 'az-add-edit-district',
  templateUrl: './add-edit-district.component.html',
  styleUrls: ['./add-edit-district.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditDistrictComponent extends BaseAddEditComponent<
  DistrictResponse,
  DistrictRequet
> {
  /**
   *
   */
  @Input()
  region$!: Observable<IdName[]>;

  /**
   *
   * @param fb
   * @param $district
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected $district: DistrictService
  ) {
    super(fb, $district, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: DistrictResponse) {
    this.form = this.fb.group({
      region_id: [model?.region_id, Validators.required],
      name: this.fb.group({}),
    });
  }
}
