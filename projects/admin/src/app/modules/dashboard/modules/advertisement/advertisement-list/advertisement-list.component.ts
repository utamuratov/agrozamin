import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AdvertisementStatus, BaseResponse, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { Observable } from 'rxjs';
import { GridModel } from '../../translate/models/grid-model';
import { GridQuery } from '../../translate/models/grid-query.interface';
import { AdvertisementGetAll } from '../dto/advertisement-get-all.interface';
import { AdvertisementResponse } from '../dto/advertisement.response';
import { AdvertisementService } from '../services/advertisement.service';

@Component({
  selector: 'az-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListComponent implements OnInit {
  /**
   *
   */
  data!: GridModel<AdvertisementGetAll>;

  /**
   *
   */
  pageSize = AdminConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  STATUS = AdvertisementStatus;

  /**
   *
   */
  getGridData: (
    query: GridQuery,
    url?: string
  ) => Observable<BaseResponse<GridModel<AdvertisementGetAll>>>;

  constructor(
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef,
    private $advertisement: AdvertisementService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getGridData = this.$advertisement.getGridData.bind($advertisement);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.loadInitData();
  }

  /**
   *
   */
  loadInitData() {
    this.loadDataFromServer(AdminConstants.DEFAULT_GRID_QUERY);
  }

  /**
   *
   */
  loadDataFromServer(query: GridQuery) {
    query.filter = this.getQueryFilter();

    this.getGridData(query).subscribe((result) => {
      if (result.success) {
        this.data = {
          ...result.data,
          data: result.data.data,
        };
        this.cd.markForCheck();
      }
    });
  }

  private getQueryFilter() {
    return [
      // { key: 'role', value: [String(this.filterRole || '')] },
      // { key: 'moderator', value: [String(this.filterModerator || '')] },
      // { key: 'search_by', value: [this.searchBy] },
      // { key: 'search_text', value: [this.searchText] },
    ];
  }

  /**
   *
   * @param params
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || '';
    const sortOrder = (currentSort && currentSort.value) || '';
    this.loadDataFromServer({
      pageIndex,
      pageSize,
      sortField,
      sortOrder,
      filter,
    });
  }

  addEdit(model?: AdvertisementGetAll) {
    // EDIT
    if (model) {
      this.router.navigate(['edit', model.id], { relativeTo: this.route });
    }
  }

  delete(id: number) {
    // TODO
  }
}
