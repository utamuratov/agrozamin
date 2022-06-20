import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Filter, GridModel, GridQuery, NgDestroy } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { finalize, takeUntil } from 'rxjs';
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
export class AdvertisementListComponent {
  /**
   *
   */
  @Input()
  filters!: Filter[];

  /**
   *
   */
  private _queryParams!: Params;
  public get queryParams(): Params {
    return this._queryParams;
  }
  @Input()
  public set queryParams(v: Params | undefined) {
    if (v) {
      this._queryParams = v;
      this.characteristics = this.queryParams['characteristics'];
    }
    this.loadDataByInitialQuery();
  }

  /**
   *
   */
  private _categoryId!: number;
  public get categoryId(): number {
    return this._categoryId;
  }
  @Input()
  public set categoryId(v: number | undefined) {
    if (v) {
      this._categoryId = v;
      this.initQuery();
    }
  }

  /**
   *
   */
  characteristics!: string;

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

  /**
   *
   */
  visibleFilter = false;

  /**
   *
   * @param cd
   * @param route
   * @param $advertisement
   */
  constructor(
    private cd: ChangeDetectorRef,
    private $advertisement: AdvertisementService
  ) {
    this.initQuery();
    this.setDefaultData();
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
      { key: 'characteristics', value: [this.characteristics || ''] },
      { key: 'category_id', value: [String(this.categoryId || '')] },
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
    this.query.sortField = 'created_at';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadData();
  }

  /**
   *
   */
  openFilter(): void {
    this.visibleFilter = true;
  }

  /**
   *
   */
  closeFilter(): void {
    this.visibleFilter = false;
  }
}
