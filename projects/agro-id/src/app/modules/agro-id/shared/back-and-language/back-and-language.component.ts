import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'back-and-language',
  templateUrl: './back-and-language.component.html',
  styleUrls: ['./back-and-language.component.less'],
})
export class BackAndLanguageComponent {
  /**
   *
   */
  constructor(private location: Location) {}

  /**
   *
   */
  back() {
    this.location.back();
  }
}
