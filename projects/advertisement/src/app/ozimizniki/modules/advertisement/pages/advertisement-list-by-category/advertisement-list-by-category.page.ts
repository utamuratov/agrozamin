import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Filter } from 'ngx-az-core';
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
      this.categoryId = params['categoryId'];
    });
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
    });
  }
}
