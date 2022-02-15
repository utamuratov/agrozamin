import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

@Component({
  selector: 'agro-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  breadcrumbs: {
    name: string;
    url: string;
  }[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  ngOnInit() {
    console.log('Breadcrumb_ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('Breadcrumb_ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('Breadcrumb_ngAfterContentInit');
  }
  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['bc']) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });
      let url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');
      this.breadcrumbs.push({
        name: node.data['bc'],
        url: '/' + url
      })
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

}
