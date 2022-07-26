import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb, Filter } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryForBreadcrumb } from 'projects/advertisement/src/app/shared/models/category-for-breadcrumb.interface';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { ParamAndQuery } from '../../dto/param-and-query.interface';

@Component({
  templateUrl: './advertisement-list-by-category.page.html',
  styleUrls: ['./advertisement-list-by-category.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListByCategoryPage extends Breadcrumb {
  /**
   *
   */
  filter: ParamAndQuery = {} as ParamAndQuery;

  /**
   *
   */
  filters!: Filter[];

  /**
   *
   */
  categories!: Category[];

  /**
   *
   */
  categoriesForBreadcrumb!: CategoryForBreadcrumb[];

  /**
   *
   * @param route
   * @param $category
   */
  constructor(
    protected override router: Router,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    super(router, cd);

    this.route.data.subscribe((data) => {
      this.filter = {
        ...data[AdvertisementConstants.RESOLVERS_ADVERTISEMENTS_BY_CATEGORY]
          .filter,
      };
      this.categories =
        data[
          AdvertisementConstants.RESOLVERS_ADVERTISEMENTS_BY_CATEGORY
        ].categories;
      this.categoriesForBreadcrumb =
        data[AdvertisementConstants.RESOLVERS_BREADCRUMB_BY_CATEGORY_SEQUENCE];
      this.filters = [];
      this.cd.markForCheck();
    });

    this.route.queryParams.subscribe((queryParams) => {
      this.filter = { ...this.filter, queryParams };
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  onChangeFilters(filters: Filter[]) {
    this.filters = filters;
  }
}
