import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { InputTypeForFilter } from 'ngx-az-core';

@Pipe({
  name: 'valueByInputType',
})
export class ValueByInputTypePipe extends DatePipe implements PipeTransform {
  override transform(value: NzSafeAny, inputType: NzSafeAny): any {
    if (inputType === InputTypeForFilter.DateRangePicker) {
      return super.transform(value, 'yyyy-mm-dd');
    }

    if (inputType === InputTypeForFilter.DateYearRangePicker) {
      return super.transform(value, 'yyyy');
    }
    return value;
  }
}
