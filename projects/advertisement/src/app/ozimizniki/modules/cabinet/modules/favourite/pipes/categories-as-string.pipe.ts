import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../dto/saved-filter.interface';

@Pipe({
  name: 'categoriesAsString',
})
export class CategoriesAsStringPipe implements PipeTransform {
  transform(value: Category[]): string {
    if (Array.isArray(value)) {
      return value.map((category) => category.category).join(' / ');
    }

    return '';
  }
}
