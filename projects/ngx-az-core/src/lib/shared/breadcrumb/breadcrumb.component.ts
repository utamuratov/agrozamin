import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumb {
  /**
   *
   */
  breadcrumbs: {
    name: string;
    data?: {
      name: string;
      value: string;
      list: {
        name: string;
        value: string;
      }[];
    };
    url: string;
  }[] = [];

  /**
   *
   * @param router
   */
  constructor(protected router: Router, protected cd: ChangeDetectorRef) {
    this.router.events.subscribe(() => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
      this.cd.markForCheck();
    });
  }

  /**
   *
   * @param node
   */
  parseRoute(node: ActivatedRouteSnapshot) {
    const bc = node.data['bc'];
    if (bc) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach((routerState) => {
        urlSegments = urlSegments.concat(routerState.url);
      });
      let url = urlSegments
        .map((urlSegment) => {
          return urlSegment.path;
        })
        .join('/');
      url = '/' + url;

      if (this.breadcrumbs.find((bc) => bc.url === url)) {
        return;
      }

      if (typeof bc === 'string') {
        this.breadcrumbs.push({
          name: bc,
          url,
        });
      } else {
        this.breadcrumbs.push({
          data: bc,
          name: '',
          url,
        });
      }
    }

    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
}
