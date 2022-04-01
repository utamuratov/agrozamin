import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleTotal',
})
export class TitleTotalPipe implements PipeTransform {
  transform(total: number): string {
    return total === 0 ? '' : ` (${total})`;
  }
}
