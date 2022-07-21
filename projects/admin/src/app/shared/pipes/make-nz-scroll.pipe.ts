import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { innerHeight$ } from '../../components/app/app.component';
import { AdminConstants } from '../../core/admin-constants';

export const SUBTRAHEND = 350;
@Pipe({
  name: 'makeNzScroll',
})
export class MakeNzScrollPipe implements PipeTransform {
  transform(
    total: number,
    subtrahend = SUBTRAHEND,
    x = 500,
    showScrollbar = false
  ): Observable<{
    x?: string | null;
    y?: string | null;
  }> {
    return innerHeight$.pipe(
      map((innerHeight) => {
        const xy: {
          x?: string | null;
          y?: string | null;
        } =
          total > AdminConstants.PAGINATION_PAGE_SIZE || showScrollbar
            ? { y: innerHeight - subtrahend + 'px' }
            : {};
        if (x !== undefined) {
          xy.x = x + 'px';
        }
        return xy;
      })
    );
  }
}
