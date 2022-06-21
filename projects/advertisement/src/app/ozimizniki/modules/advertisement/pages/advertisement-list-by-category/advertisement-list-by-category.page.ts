import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Filter } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';

@Component({
  templateUrl: './advertisement-list-by-category.page.html',
  styleUrls: ['./advertisement-list-by-category.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListByCategoryPage {
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
   * @param route
   * @param $category
   */
  constructor(
    private route: ActivatedRoute,
    private $category: CategoryService
  ) {
    this.route.params.subscribe((params) => {
      const categories = params[
        AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID
      ].split(AdvertisementConstants.SPLITTER_CATEGORY_ID);
      this.categoryId = categories[categories.length - 1];
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
