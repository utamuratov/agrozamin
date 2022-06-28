import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridModel, GridQuery } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { FavouriteService } from 'projects/advertisement/src/app/shared/services/favourite.service';
import { Advertisement } from '../../../../../advertisement/dto/advertisement.interface';

@Component({
  templateUrl: './favourite-advertisement.component.html',
  styleUrls: ['./favourite-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteAdvertisementComponent {
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
  isInlineCard = true;

  constructor(
    private route: ActivatedRoute,
    private $favourite: FavouriteService,
    private cd: ChangeDetectorRef
  ) {
    this.initQuery();
    this.data = this.route.snapshot.data['advertisements'];
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
    return [];
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
  loadDataFromServer(query: GridQuery) {
    this.$favourite.getGridData(query).subscribe((result) => {
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
  toggleCardStyle() {
    this.isInlineCard = !this.isInlineCard;
  }
}
