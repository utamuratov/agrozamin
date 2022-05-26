import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Pipe({
  name: 'azCurrency',
})
export class CurrencyPipe extends TranslatePipe implements PipeTransform {
  override transform(price: NzSafeAny): string {
    const priceString = price + '';
    let separated = '';
    let start = 0;
    let count = priceString.length % 3;
    if (count === 0) count = 3;
    separated += priceString.slice(start, (start += count));
    count = 3;
    while (start < priceString.length) {
      separated += ' ' + priceString.slice(start, (start += count));
    }
    return separated + ' ' + super.transform('sum');
  }
}
