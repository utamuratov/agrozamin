import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgDestroy extends Subject<null> implements OnDestroy {
  ngOnDestroy(): void {
    this.next(null);
    this.complete();
  }
}
