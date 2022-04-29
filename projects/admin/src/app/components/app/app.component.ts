import { Component, HostListener } from '@angular/core';
import { Store } from '@ngxs/store';
import { Languages } from 'ngx-az-core';
import { BehaviorSubject } from 'rxjs';

export const innerHeight$ = new BehaviorSubject<number>(window.innerHeight);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(new Languages());
  }

  /**
   *
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    innerHeight$.next(event.target.innerHeight);
  }
}
