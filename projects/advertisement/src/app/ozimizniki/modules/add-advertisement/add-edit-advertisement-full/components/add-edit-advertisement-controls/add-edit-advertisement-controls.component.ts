import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { Observable } from 'rxjs';
import { AdvertisementEditResponse } from '../../dto/advertisement-edit.response';
import { CategoryType } from '../../dto/category-type.interface';
import { District } from '../../dto/district.interface';
import { Filter } from '../../dto/filter.interface';
import { Region } from '../../dto/region.interface';
import { NzImageCustom } from '../media/media.component';

@Component({
  selector: 'az-add-edit-advertisement-controls',
  templateUrl: './add-edit-advertisement-controls.component.html',
  styleUrls: ['./add-edit-advertisement-controls.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAdvertisementControlsComponent {
  /**
   *
   */
  @Input()
  isHiddenContactdata = false;

  /**
   *
   */
  @Input()
  isHiddenUserAgreement = false;

  /**
   *
   */
  @Input()
  data?: AdvertisementEditResponse;

  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input()
  region$!: Observable<Region[]>;

  /**
   *
   */
  @Input()
  district$!: Observable<District[]>;

  /**
   *
   */
  @Input()
  categoryType$!: Observable<CategoryType[]>;

  /**
   *
   */
  @Input()
  filters: Filter[] = [];

  /**
   *
   */
  @Input()
  uploadedFiles?: NzImageCustom[];

  /**
   *
   */
  @Input()
  categoryId?: number;

  /**
   *
   */
  @Input()
  currentCategory?: IdName;

  /**
   *
   */
  isAgreeUserAgreement = false;

  @Output()
  changeCategoryId = new EventEmitter<number | undefined>();
}
