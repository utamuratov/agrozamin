import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Languages } from 'ngx-az-core';

let apiLoaded = false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  /**
   *
   * @param store
   */
  constructor(private store: Store) {
    this.store.dispatch(new Languages());
  }

  /**
   *
   */
  ngOnInit(): void {
    this.appendIFrameForYoutube();
  }

  /**
   *
   * This code loads the IFrame Player API code asynchronously, according to the instructions at
   * https://developers.google.com/youtube/iframe_api_reference#Getting_Started
   */
  private appendIFrameForYoutube() {
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
