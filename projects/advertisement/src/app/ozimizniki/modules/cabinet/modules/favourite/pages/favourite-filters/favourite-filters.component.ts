import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants, GridLogic } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { prefixPath } from 'projects/advertisement/src/app/core/utilits/advertisement.utilits';
import { SavedFilter } from '../../dto/saved-filter.interface';
import { FilterService } from '../../services/filter.service';

@Component({
  templateUrl: './favourite-filters.component.html',
  styleUrls: ['./favourite-filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteFiltersComponent extends GridLogic<SavedFilter> {
  /**
   *
   * @param $data
   * @param cd
   * @param route
   */
  constructor(
    protected override $data: FilterService,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super($data, cd);
    this.data =
      this.route.snapshot.data[
        AdvertisementConstants.RESOLVERS_FAVORITE_FILTERS
      ];
  }

  /**
   *
   * @param savedFilter
   */
  private navigateToAdvertisements(categories: string, filterParams: string) {
    this.router.navigate(
      [
        prefixPath,
        Constants.DEFAULT_LANGUAGE_CODE,
        AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
        categories,
      ],
      {
        queryParams: {
          [AdvertisementConstants.QUERY_PARAM_CHARACTERISTICS]: filterParams,
        },
      }
    );
  }

  /**
   *
   * @param savedFilter
   */
  viewFilter(savedFilter: SavedFilter) {
    const categories = savedFilter.categories
      .map((category) => category.id)
      .join(AdvertisementConstants.SPLITTER_CATEGORY_ID);
    const filterParams = savedFilter.parameters
      .map(
        (filter) =>
          `${filter.filter_id}${AdvertisementConstants.SPLITTER_BETWEEN_FILTERID_AND_VALUE}${filter.parameter_id}`
      )
      .join(AdvertisementConstants.SPLITTER_FILTERID_VALUE);
    this.navigateToAdvertisements(categories, filterParams);
  }

  /**
   *
   * @param id
   */
  deleteFilter(id: number) {
    this.$data.delete(id).subscribe((result) => {
      this.loadData();
    });
  }

  /**
   *
   * @param id
   */
  switchOnOffNotification(id: number) {
    this.$data.switchOnOffNotification(id).subscribe();
  }
}
