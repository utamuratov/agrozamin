import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

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
    url: string;
  }[] = [];

  /**
   *
   * @param router
   */
  constructor(protected router: Router) {
    this.router.events.subscribe(() => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  /**
   *
   * @param node
   */
  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['bc']) {
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

      this.breadcrumbs.push({
        name: node.data['bc'],
        url,
      });
    }

    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
}
