import { Pipe, PipeTransform } from '@angular/core';

const h = new Map();
let index = 1;
@Pipe({
  name: 'classByCategoryId',
})
export class ClassByCategoryIdPipe implements PipeTransform {
  transform(value: number): any {
    if (!h.get(value)) {
      h.set(value, index++);
    }
    return `tag--${h.get(value)}`;
  }
}
