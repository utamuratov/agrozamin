import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Languages } from 'ngx-az-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private store: Store) {
    store.dispatch(new Languages());
  }
}
