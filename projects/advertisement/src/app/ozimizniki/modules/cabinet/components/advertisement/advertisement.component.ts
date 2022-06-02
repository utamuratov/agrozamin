import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementStatus, IdName, GridQuery, GridModel } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
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
   * @param $advertisment
   * @param route
   */
  constructor(
    private $advertisment: AdvertisementService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.getFilterData();

    this.route.params.subscribe((params) => {
      this.status = params['status'];
      this.loadInitData();
    });
  }

  /**
   *
   */
  loadInitData(pageIndex = AdvertisementConstants.DEFAULT_PAGE_INDEX) {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    query.pageIndex = pageIndex;
    this.loadDataFromServer(query);
  }

  /**
   *
   */
  loadDataFromServer(query: GridQuery) {
    query.filter = this.getQueryFilter();

    this.$advertisment.getGridData(query).subscribe((result) => {
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
    this.$advertisment.getFilterData().subscribe((result) => {
      if (result.success) {
        this.categories = result.data.categories;
        this.advertisementTypes = result.data.announcement_types;
      }
    });
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
}
