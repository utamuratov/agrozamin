import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
import { Filter } from '../../dto/filter.interface';
import { AddAdvertisementService } from '../../services/add-advertisement.service';

@Component({
  selector: 'az-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacteristicsComponent {
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
    this.getFiltersByCategoryId(this._categoryId);
  }

  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  filters: Filter[] = [];

  /**
   *
   */
  InputTypeForCreator = InputTypeForCreator;

  /**
   *
   * @param $addAdvertisement
   * @param cd
   */
  constructor(
    private $addAdvertisement: AddAdvertisementService,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   * @param categoryId
   */
  getFiltersByCategoryId(categoryId?: number) {
    if (categoryId === undefined) {
      this.filters = [];
      this.cd.markForCheck();
      return;
    }

    this.$addAdvertisement
      .getFiltersByCategoryId(categoryId)
      .subscribe((result) => {
        if (result.success) {
          this.filters = result.data;
          const filter = this.filters.find(
            (w) => w.type_for_creator === InputTypeForCreator.Checkbox
          );
          if (filter) {
            filter.value = filter.parameters.map((t) => {
              return {
                label: t.label,
                value: t.filter_parameter_id.toString(),
              };
            });
          }
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   */
  checkValid() {
    this.filters.forEach((filter) => {
      filter.value ? (filter.invalid = false) : (filter.invalid = true);
    });
    this.cd.markForCheck();
  }
}
