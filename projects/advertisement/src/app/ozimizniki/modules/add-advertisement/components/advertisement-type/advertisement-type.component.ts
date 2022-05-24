import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryType } from '../../dto/category-type.interface';
import { AddAdvertisementService } from '../../services/add-advertisement.service';

@Component({
  selector: 'az-advertisement-type',
  templateUrl: './advertisement-type.component.html',
  styleUrls: ['./advertisement-type.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTypeComponent {
  /**
   *
   */
  private _categoryId?: number;
  public get categoryId(): number | undefined {
    return this._categoryId;
  }
  @Input()
  public set categoryId(v: number | undefined) {
    this._categoryId = v;
    this.getCategoryTypes(this._categoryId);
  }

  /**
   *
   */
  categoryTypes: CategoryType[] = [];

  /**
   *
   */
  @Input()
  form!: FormGroup;

  radioValue = '1';

  constructor(
    private $advertisement: AddAdvertisementService,
    private cd: ChangeDetectorRef
  ) {}

  getCategoryTypes(categoryId?: number) {
    if (categoryId === undefined) {
      this.categoryTypes = [];
      this.cd.markForCheck();
      return;
    }

    return this.$advertisement
      .getCategoryTypesByCategoryId(categoryId)
      .subscribe((result) => {
        if (result.success) {
          this.categoryTypes = result.data;
          this.cd.markForCheck();
        }
      });
  }
}
