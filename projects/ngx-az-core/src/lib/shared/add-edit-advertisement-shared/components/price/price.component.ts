import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'az-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  hasNotPrice = false;

  radioValueTrade = 'no';

  ngOnInit(): void {}

  /**
   *
   * @param hasNotPrice
   */
  onChangeHasNotPrice(hasNotPrice: boolean) {
    const priceControl = this.form.controls['price'];
    if (hasNotPrice) {
      priceControl.disable({ onlySelf: true });
    } else {
      priceControl.enable({ onlySelf: true });
    }
  }
}
