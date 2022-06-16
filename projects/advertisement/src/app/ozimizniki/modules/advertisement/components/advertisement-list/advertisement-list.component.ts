import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GridModel, GridQuery } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { finalize } from 'rxjs';
import { Advertisement } from '../../dto/advertisement.interface';
import { AdvertisementService } from '../../services/advertisement.service';
import { products } from './data';

const DEFAULT_DATA: GridModel<Advertisement> = {
  current_page: 0,
  data: [
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
    {} as Advertisement,
  ],
  per_page: AdvertisementConstants.PAGINATION_PAGE_SIZE,
  total: AdvertisementConstants.PAGINATION_PAGE_SIZE,
};

@Component({
  selector: 'az-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.less'],
})
export class AdvertisementListComponent implements OnInit {
  /**
   *
   */
  @Input()
  categoryId!: number;

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
  isLoaded!: boolean;

  /**
   *
   */
  isInlineCard = false;

  products = products;
  cardSizeIndex = 6;

  visible = false;

  constructor(
    private cd: ChangeDetectorRef,
    private $advertisement: AdvertisementService
  ) {
    this.initQuery();
    this.setDefaultData();
  }

  ngOnInit() {
    this.loadDataByInitialQuery();
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
      // { key: 'status', value: [String(this.status || '')] },
      { key: 'category_id', value: [String(this.categoryId || '')] },
      // {
      //   key: 'type_id',
      //   value: [String(this.advertisementTypeId || '')],
      // },
    ];
  }

  /**
   *
   */
  private loadDataByInitialQuery() {
    this.initQuery();
    this.loadData();
  }

  /**
   *
   */
  private setDefaultData() {
    this.isLoaded = false;
    this.data = DEFAULT_DATA;
  }

  /**
   *
   */
  loadDataFromServer(query: GridQuery) {
    this.$advertisement
      .getGridData(query)
      .pipe(finalize(() => (this.isLoaded = true)))
      .subscribe((result) => {
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
  paginate(pageIndex = AdvertisementConstants.DEFAULT_PAGE_INDEX) {
    this.query.pageIndex = pageIndex;
    this.loadData();
  }

  /**
   *
   */
  private loadData() {
    this.setDefaultData();
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  sortByPriceDescanding(byDescanding: boolean) {
    this.query.sortField = 'price';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadData();
  }

  /**
   *
   */
  sortByDateDescanding(byDescanding: boolean) {
    this.query.sortField = 'created_date';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadData();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
