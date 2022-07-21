import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Constants, Languages } from 'ngx-az-core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  /**
   *
   */
  previousProjectName = '';

  /**
   *
   */
  constructor(private router: Router, private store: Store) {
    this.store.dispatch(new Languages());
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((w) => {
        let projectName = (w as any)?.url.split('/')?.[1];
        if (!projectName) {
          projectName = Constants.AGRO_ZAMIN_ROUTE_PATH;
        }

        if (this.previousProjectName !== projectName) {
          this.previousProjectName = projectName;
          this.loadCss(`${projectName}.css`, 'project');
        }
      });
  }

  /**
   *
   * @param href
   * @param id
   * @returns
   */
  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = (document.getElementById(id) ??
        document.createElement('link')) as HTMLLinkElement;
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }
}
