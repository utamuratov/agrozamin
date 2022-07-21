import { Pipe, PipeTransform } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Pipe({
  name: 'azSort',
})
export class SortPipe implements PipeTransform {
  /**
   *
   * @param key = Just key or Deep key ('key' or 'key.key' ...)
   * @param byLocalCompare
   * @returns
   */
  transform(key: string, byLocalCompare = true) {
    if (byLocalCompare)
      return (a: NzSafeAny, b: NzSafeAny) => {
        const ab = this.valueInTheDeep(key, a, b);
        return ab.a.localeCompare(ab.b);
      };

    return (a: NzSafeAny, b: NzSafeAny) => {
      const ab = this.valueInTheDeep(key, a, b);
      return ab.a - ab.b;
    };
  }

  /**
   *
   * @param key
   * @param a
   * @param b
   * @returns
   */
  valueInTheDeep = (key: string, a: NzSafeAny, b: NzSafeAny) => {
    const keys = key.split('.');
    a = a[keys[0]];
    b = b[keys[0]];
    for (let index = 1; index < keys.length; index++) {
      const key = keys[index];
      a = a[key];
      b = b[key];
    }
    return { a, b };
  };
}
