import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';
import { SEOService } from '../services/seo.service';

@Injectable({
  providedIn: 'root',
})
export class SEOResolver implements Resolve<boolean> {
  /**
   *
   */
  constructor(private $sEOService: SEOService) {}

  /**
   *
   */
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.setMeta(route);
  }

  /**
   *
   */
  setMeta(node: ActivatedRouteSnapshot): Observable<boolean> {
    if (node.data['meta']) {
      const meta = node.data['meta'];
      return forkJoin([
        this.$sEOService.updateTitle(meta.title),
        this.$sEOService.updateDescription(meta.description),
      ]).pipe(map(() => true));
    }

    return of(false);
  }
}
