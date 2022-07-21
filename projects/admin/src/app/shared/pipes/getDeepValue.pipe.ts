import { Pipe, PipeTransform } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Pipe({
  name: 'getDeepValue',
})
export class GetDeepValuePipe implements PipeTransform {
  transform(field: string, data?: NzSafeAny): NzSafeAny {
    const splitted = field.split('.');
    if (splitted.length === 0) {
      return '';
    }
    let value = data[splitted[0]];
    for (let index = 1; index < splitted.length; index++) {
      value = value[splitted[index]];
    }
    return value;
  }
}
