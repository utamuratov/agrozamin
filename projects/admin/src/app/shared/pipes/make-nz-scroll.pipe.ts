import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { innerHeight$ } from '../../components/app/app.component';

export const SUBTRAHEND = 350;
@Pipe({
  name: 'makeNzScroll',
})
export class MakeNzScrollPipe implements PipeTransform {
  transform(
    total: number,
    subtrahend = SUBTRAHEND,
    x?: number,
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
          total > 10 || showScrollbar
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
