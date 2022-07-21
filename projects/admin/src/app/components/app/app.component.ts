import { Component, HostListener } from '@angular/core';
import { Store } from '@ngxs/store';
import { Languages } from 'ngx-az-core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';

export const innerHeight$ = new BehaviorSubject<number>(window.innerHeight);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  /**
   *
   * @param store
   * @param ngxLoader
   */
  constructor(private store: Store, private ngxLoader: NgxUiLoaderService) {
    this.store.dispatch(new Languages());
    this.stopNgxUiLoader();
  }

  /**
   *
   * * Sometimes NgxUiLoader does not stop loading or
   * * close the overlay. I do not know Why it is happening:(
   */
  private stopNgxUiLoader() {
    setTimeout(() => {
      this.ngxLoader.stopLoader('master');
    }, 2000);
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
