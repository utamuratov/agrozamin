import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Breadcrumb, Filter } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';

@Component({
  templateUrl: './advertisement-list-by-category.page.html',
  styleUrls: ['./advertisement-list-by-category.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListByCategoryPage extends Breadcrumb {
  /**
   *
   */
  categoryId!: number;

  /**
   *
   */
  queryParams!: Params;

  /**
   *
   */
  filters!: Filter[];

  /**
   *
   */
  categoryIds: string[] = [];

  /**
   *
   * @param route
   * @param $category
   */
  constructor(
    protected override router: Router,
    private route: ActivatedRoute,
    private $category: CategoryService
  ) {
    super(router);

    this.route.params.subscribe((params) => {
      const categoryId =
        params[AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID]; // 2_3_.. = categoryId_categoryId_..
      this.categoryIds = categoryId.split(
        AdvertisementConstants.SPLITTER_CATEGORY_ID
      );
      this.categoryId = +this.categoryIds[this.categoryIds.length - 1];
    });
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
    });
  }

  /**
   *
   */
  onChangeFilters(filters: Filter[]) {
    this.filters = filters;
  }
}
