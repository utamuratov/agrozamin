import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridModel, GridQuery } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { finalize } from 'rxjs';
import { DEFAULT_DATA } from '../../../advertisement/components/advertisement-list/advertisement-list.component';
import { Advertisement } from '../../../advertisement/dto/advertisement.interface';
import { cat } from '../../../advertisement/pages/advertisement-list-by-category/subcategory';
import { SellerService } from '../../services/seller.service';
import { partnerProd } from './partnerData';

@Component({
  selector: 'az-catalog-partner-posts',
  templateUrl: './catalog-partner-posts.component.html',
  styleUrls: ['./catalog-partner-posts.component.less'],
})
export class CatalogPartnerPostsComponent implements OnInit {
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
  query!: GridQuery;

  /**
   *
   */
  sellerId!: number;

  /**
   *
   */
  isInlineCard = false;

  /**
   *
   */
  isLoaded = false;

  categories = cat;
  id = 1;
  isActive = false;
  partnerProducts = partnerProd;
  @Input() categoryId!: number;
  products = partnerProd;
  cardSizeIndex = 6;

  visible = false;

  constructor(
    private $seller: SellerService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.sellerId = this.route.snapshot.params['sellerId'];
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
      // {
      //   key: AdvertisementConstants.QUERY_PARAM_CHARACTERISTICS,
      //   value: [this.characteristics || ''],
      // },
      // { key: 'category_id', value: [String(this.categoryId || '')] },
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
    this.$seller
      .getGridData(query, `user/announcement/${this.sellerId}`)
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

  ngOnInit(): void {
    this.loadDataByInitialQuery();
  }

  handleCategory(id: number) {
    this.id = id;
  }

  isGrid() {
    this.isActive = false;
  }

  isList() {
    this.isActive = true;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
