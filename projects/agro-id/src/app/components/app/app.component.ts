import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Languages } from 'ngx-az-core';
import { finalize, map, Observable, of, startWith, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  /**
   *
   */
  isLoading$?: Observable<boolean>;

  /**
   *
   * @param store
   * @param router
   */
  constructor(private store: Store, private router: Router) {
    this.store.dispatch(new Languages());
    this.isLoading$ = this.router.events.pipe(
      map((ev) => {
        if (
          ev instanceof NavigationEnd ||
          ev instanceof NavigationCancel ||
          ev instanceof NavigationError
        ) {
          return false;
        }
        return true;
      }),
      startWith(true),
      takeWhile((isLoading) => {
        return isLoading;
      }),
      finalize(() => {
        this.isLoading$ = undefined;
      })
    );
  }
}
