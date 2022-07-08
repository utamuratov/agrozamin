import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryForBreadcrumb } from 'projects/advertisement/src/app/shared/models/category-for-breadcrumb.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreadcrumbByCategorySequenceResolver
  implements Resolve<CategoryForBreadcrumb[]>
{
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
  ):
    | Observable<CategoryForBreadcrumb[]>
    | Promise<CategoryForBreadcrumb[]>
    | CategoryForBreadcrumb[] {
    const params = route.params;
    const categorySequence =
      params[AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID]; // 2_3_.. = categoryId_categoryId_..

    return this.getCategoriesBySequence(categorySequence);
  }

  /**
   *
   */
  private getCategoriesBySequence(categorySequence: string) {
    return this.$category
      .getCategoriesByCategorySequence(categorySequence)
      .pipe(
        map((categories) => {
          const validCategories: CategoryForBreadcrumb[] = [];
          categories.forEach((category, index) => {
            if (
              !category.neighbor_categories.find((w) => w.id === category.id)
            ) {
              return;
            }

            if (index === 0) {
              category.sequence = category.id + '';
            } else {
              category.sequence = `${categories[index - 1].sequence}${
                AdvertisementConstants.SPLITTER_CATEGORY_ID
              }${category.id}`;
            }

            category.neighbor_categories.forEach((neighbour) => {
              if (index === 0) {
                neighbour.sequence = neighbour.id + '';
              } else {
                neighbour.sequence = `${categories[index - 1].sequence}${
                  AdvertisementConstants.SPLITTER_CATEGORY_ID
                }${neighbour.id}`;
              }
            });
            validCategories.push(category);
          });

          return validCategories;
        })
      );
  }
}
