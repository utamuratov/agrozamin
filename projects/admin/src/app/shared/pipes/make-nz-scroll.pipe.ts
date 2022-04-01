import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { innerHeight$ } from '../../components/app/app.component';

@Pipe({
  name: 'makeNzScroll',
})
export class MakeNzScrollPipe implements PipeTransform {
  transform(
    total: number,
    subtrahend = 350,
    x?: number
  ): Observable<{
    x?: string | null;
    y?: string | null;
  }> {
    return innerHeight$.pipe(
      map((innerHeight) => {
        const xy: {
          x?: string | null;
          y?: string | null;
        } = total > 10 ? { y: innerHeight - subtrahend + 'px' } : {};
        if (x !== undefined) {
          xy.x = x + 'px';
        }
        return xy;
      })
    );
  }
}
