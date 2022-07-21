import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdvertisementListResolver implements Resolve<Category[]> {
  /**
   *
   */
  constructor(private $category: CategoryService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Category[]> | Promise<Category[]> | Category[] {
    return this.$category.getAll();
  }
}
