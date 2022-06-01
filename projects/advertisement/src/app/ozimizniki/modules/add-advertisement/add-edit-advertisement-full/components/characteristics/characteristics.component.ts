import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
import { Filter } from '../../dto/filter.interface';

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
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input()
  filters!: Filter[];

  /**
   *
   */
  InputTypeForCreator = InputTypeForCreator;

  /**
   *
   * @param $addAdvertisement
   * @param cd
   */
  constructor(private cd: ChangeDetectorRef) {}

  /**
   *
   */
  checkControlsToInvalid() {
    this.filters.forEach((filter) => {
      filter.value ? (filter.invalid = false) : (filter.invalid = true);
    });
    this.cd.markForCheck();
  }
}
