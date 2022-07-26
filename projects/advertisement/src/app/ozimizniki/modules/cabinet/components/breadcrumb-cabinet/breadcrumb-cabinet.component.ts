import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from 'ngx-az-core';

@Component({
  selector: 'az-breadcrumb-cabinet',
  templateUrl: './breadcrumb-cabinet.component.html',
  styleUrls: ['./breadcrumb-cabinet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbCabinetComponent extends Breadcrumb {
  /**
   *
   * @param router
   * @param $category
   * @param cd
   */
  constructor(
    protected override router: Router,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    super(router, cd);
  }

  /**
   *
   * @param sequence
   * @returns
   */
  navigateBySequence(activeUrl: string, newUrl: string) {
    const urls = activeUrl.split('/');
    if (Array.isArray(urls)) {
      urls[urls.length - 1] = newUrl;

      this.router.navigate(urls);
      return;
    }
  }
}
