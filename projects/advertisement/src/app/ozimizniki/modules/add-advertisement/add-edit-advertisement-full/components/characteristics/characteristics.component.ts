import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
import { map, of } from 'rxjs';
import { Characteristics } from '../../dto/characteristics.interface';
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
    this.getFiltersByCategoryId(this._categoryId).subscribe((filters) => {
      this.filters = filters;

      this.cd.markForCheck();
    });
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
      return of([]);
    }

    return this.$addAdvertisement.getFiltersByCategoryId(categoryId).pipe(
      map((result) => {
        if (result.success) {
          this.form.controls['characteristics'].setValidators([
            Validators.required,
          ]);
          this.form.controls['characteristics'].updateValueAndValidity();
          this.makeCheckBoxOptions(result.data);
          this.setFiltersValue(result.data);
        }
        return result.data;
      })
    );
  }

  /**
   *
   */
  private setFiltersValue(filters: Filter[]) {
    const editedFilters: Characteristics[] = this.form.value['characteristics'];
    if (!editedFilters) {
      return;
    }
    filters.forEach((filter) => {
      if (
        filter.type_for_creator === InputTypeForCreator.InputNumber ||
        filter.type_for_creator === InputTypeForCreator.DatePicker ||
        filter.type_for_creator === InputTypeForCreator.DateYearPicker
      ) {
        const characteristic = editedFilters.find(
          (w) => w.filter_id === filter.filter_id
        );
        filter.value = characteristic?.value;

        return;
      }

      if (filter.type_for_creator === InputTypeForCreator.Checkbox) {
        const characteristics = editedFilters.filter(
          (w) => w.filter_id === filter.filter_id
        );

        (filter.value as NzCheckBoxOptionInterface[]).forEach((option) => {
          if (
            characteristics.find((t) => t.filter_parameter_id === +option.value)
          ) {
            option.checked = true;
          }
        });

        return;
      }

      const characteristic = editedFilters.find(
        (w) => w.filter_id === filter.filter_id
      );
      if (characteristic?.filter_parameter_id) {
        filter.value = characteristic.filter_parameter_id;
      }
    });
  }

  /**
   *
   */
  private makeCheckBoxOptions(filters: Filter[]) {
    const filter = filters.find(
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
