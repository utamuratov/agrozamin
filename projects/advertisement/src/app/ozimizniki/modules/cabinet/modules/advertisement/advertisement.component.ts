import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AdvertisementStatus,
  IdName,
  GridQuery,
  GridModel,
  NgDestroy,
  Constants,
} from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { prefixPath } from 'projects/advertisement/src/app/core/utilits/advertisement.utilits';
import { takeUntil } from 'rxjs';
import { Advertisement } from './dto/advertisment.interface';
import { AdvertisementService } from './services/advertisment.service';

@Component({
  selector: 'az-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.less'],
  providers: [AdvertisementService],
})
export class AdvertisementComponent {
  /**
   *
   */
  data!: GridModel<Advertisement>;

  /**
   *
   */
  pageSize = AdvertisementConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  query = { ...AdvertisementConstants.DEFAULT_GRID_QUERY };

  /**
   *
   */
  status!: AdvertisementStatus;

  /**
   *
   */
  categoryId!: number;

  /**
   *
   */
  advertisementTypeId!: number;

  /**
   *
   */
  AdvertisementStatus = AdvertisementStatus;

  /**
   *
   */
  categories: IdName[] = [];

  /**
   *
   */
  advertisementTypes: IdName[] = [];

  /**
   *
   * @param $advertisement
   * @param route
   */
  constructor(
    private $advertisement: AdvertisementService,
    private route: ActivatedRoute,
    private router: Router,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {
    this.getFilterData();

    this.route.params.pipe(takeUntil(this.$destroy)).subscribe((params) => {
      this.status = params['status'];
      this.initQuery();
      this.data = this.route.snapshot.data['advertisment'];
    });
  }

  /**
   *
   */
  private initQuery() {
    this.query = { ...AdvertisementConstants.DEFAULT_GRID_QUERY };
    this.query.filter = this.getQueryFilter();
  }

  /**
   *
   * @returns
   */
  private getQueryFilter() {
    return [
      { key: 'status', value: [String(this.status || '')] },
      { key: 'category_id', value: [String(this.categoryId || '')] },
      {
        key: 'type_id',
        value: [String(this.advertisementTypeId || '')],
      },
    ];
  }

  /**
   *
   */
  private loadDataByInitialQuery() {
    this.initQuery();
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  onChangeCategoryFilter() {
    this.loadDataByInitialQuery();
  }

  /**
   *
   */
  onChangeAdvertisementTypeFilter() {
    this.initQuery();
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  paginate(pageIndex = AdvertisementConstants.DEFAULT_PAGE_INDEX) {
    this.query.pageIndex = pageIndex;
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  loadDataFromServer(query: GridQuery) {
    this.$advertisement.getGridData(query).subscribe((result) => {
      if (result.success) {
        this.data = {
          ...result.data,
          data: result.data.data,
        };
        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   */
  getFilterData() {
    this.$advertisement.getFilterData().subscribe((result) => {
      if (result.success) {
        this.categories = result.data.categories;
        this.advertisementTypes = result.data.announcement_types;
      }
    });
  }

  /**
   *
   */
  sortByPriceDescanding(byDescanding: boolean) {
    this.query.sortField = 'price';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  sortByDateDescanding(byDescanding: boolean) {
    this.query.sortField = 'created_at';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  navigateToDetails(advertisement: Advertisement) {
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
      advertisement.category_id,
      advertisement.id,
    ]);
  }
}
