import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryForBreadcrumb } from 'projects/advertisement/src/app/shared/models/category-for-breadcrumb.interface';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { map, Observable, switchMap } from 'rxjs';
import { ParamAndQuery } from '../dto/param-and-query.interface';

@Injectable({ providedIn: 'root' })
export class AdvertisementListByCategoryResolver implements Resolve<any[]> {
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
  ): Observable<any> | Promise<any> | any[] {
    const filter: ParamAndQuery = {} as ParamAndQuery;
    const params = route.params;
    const categorySequence =
      params[AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID]; // 2_3_.. = categoryId_categoryId_..
    const categoryIds = categorySequence.split(
      AdvertisementConstants.SPLITTER_CATEGORY_ID
    );
    filter.categoryId = +categoryIds[categoryIds.length - 1];
    filter.queryParams = route.queryParams;

    return this.$category.getAll(filter.categoryId).pipe(
      map((categories) => {
        return {
          filter,
          categories,
        };
      })
    );
  }
}
