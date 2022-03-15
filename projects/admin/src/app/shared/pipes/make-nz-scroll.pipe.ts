import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { innerHeight$ } from '../../components/app/app.component';

@Pipe({
  name: 'makeNzScroll',
})
export class MakeNzScrollPipe implements PipeTransform {
  transform(
    total: number,
    subtrahend = 350
  ): Observable<{
    x?: string | null;
    y?: string | null;
  }> {
    return innerHeight$.pipe(
      map((innerHeight) =>
        total > 10 ? { y: innerHeight - subtrahend + 'px' } : {}
      )
    );
  }
}
