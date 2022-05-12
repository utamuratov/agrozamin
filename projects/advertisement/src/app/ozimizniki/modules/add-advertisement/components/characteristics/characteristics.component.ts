import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
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
  filters: Filter[] = [];

  /**
   *
   */
  InputTypeForCreator = InputTypeForCreator;

  selectedValue = null;
  radioValue1 = 'A';
  radioValue2 = 'A';

  checkOptionsOne = [
    { label: 'Люк', value: 'Люк', checked: true },
    { label: 'Обвес', value: 'Обвес' },
    { label: 'Лебёдка', value: 'Лебёдка' },
    { label: 'Ветровики', value: 'Ветровики' },
    { label: 'Фаркоп', value: 'Фаркоп' },
  ];
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
      this.checkOptionsOne = [];
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
            this.checkOptionsOne = filter.parameters.map((t) => {
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

  log(value: object[]): void {
    console.log(value);
  }
}
