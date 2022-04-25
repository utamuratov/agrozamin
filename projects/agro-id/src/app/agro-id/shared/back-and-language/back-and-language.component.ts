import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'back-and-language',
  templateUrl: './back-and-language.component.html',
  styleUrls: ['./back-and-language.component.less'],
})
export class BackAndLanguageComponent {
  /**
   *
   */
  @Input()
  isVisibleBackButton = true;

  /**
   *
   * *path should suit to 'relativeTo' strategy
   */
  @Input()
  pathToBack?: string;

  /**
   *
   */
  constructor(private router: Router, private route: ActivatedRoute) {}

  /**
   *
   */
  back() {
    this.router.navigate([this.pathToBack ?? '../'], {
      relativeTo: this.route,
    });
  }
}
