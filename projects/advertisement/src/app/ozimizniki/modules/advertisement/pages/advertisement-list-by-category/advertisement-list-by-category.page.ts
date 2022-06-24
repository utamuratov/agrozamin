import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Breadcrumb, Filter } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';

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
  categorySequence!: string;

  /**
   *
   * @param route
   * @param $category
   */
  constructor(
    protected override router: Router,
    private route: ActivatedRoute
  ) {
    super(router);

    this.route.params.subscribe((params) => {
      this.categorySequence =
        params[AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID]; // 2_3_.. = categoryId_categoryId_..
      const categoryIds = this.categorySequence.split(
        AdvertisementConstants.SPLITTER_CATEGORY_ID
      );
      this.categoryId = +categoryIds[categoryIds.length - 1];
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
