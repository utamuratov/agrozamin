import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { innerHeight$ } from '../../components/app/app.component';

@Pipe({
  name: 'calcScroll',
})
export class CalcScrollPipe implements PipeTransform {
  transform(value: number): Observable<number> {
    return innerHeight$.pipe(map((innerHeight) => innerHeight - value));
  }
}
