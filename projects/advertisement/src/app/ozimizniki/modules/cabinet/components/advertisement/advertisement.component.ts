import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { GridModel } from 'projects/admin/src/app/modules/dashboard/modules/translate/models/grid-model';
import { GridQuery } from 'projects/admin/src/app/modules/dashboard/modules/translate/models/grid-query.interface';
import { Advertisement } from './dto/advertisment.interface';
import { AdvertisementService } from './services/advertisment.service';

@Component({
  selector: 'az-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.less'],
  providers: [AdvertisementService],
})
export class AdvertisementComponent implements OnInit {
  /**
   *
   */
  data!: GridModel<Advertisement>;

  /**
   *
   */
  pageSize = AdminConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  status!: AdvertisementStatus;

  /**
   *
   */
  AdvertisementStatus = AdvertisementStatus;

  constructor(
    private $advertisment: AdvertisementService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      this.status = params['status'];
      this.loadInitData();
    });
  }

  ngOnInit() {}

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

    this.$advertisment.getGridData(query).subscribe((result) => {
      if (result.success) {
        this.data = {
          ...result.data,
          data: result.data.data,
        };
        // this.cd.markForCheck();
      }
    });
  }

  private getQueryFilter() {
    return [
      { key: 'status', value: [String(this.status || '')] },
      // { key: 'moderator', value: [String(this.filterModerator || '')] },
      // { key: 'search_by', value: [this.searchBy] },
      // { key: 'search_text', value: [this.searchText] },
    ];
  }
}
