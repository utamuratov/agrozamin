import { Pipe, PipeTransform } from '@angular/core';
import { CategoryParent } from '../dto/search.response';

@Pipe({
  name: 'categoryAsString',
})
export class CategoryAsStringPipe implements PipeTransform {
  transform(value: CategoryParent[], currentCategory?: string): string {
    if (Array.isArray(value)) {
      const categoryNames = value.map((category) => category.name);

      if (currentCategory) {
        categoryNames.push(currentCategory);
      }

      return categoryNames.join(' / ');
    }

    return '';
  }
}
