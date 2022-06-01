import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { GridService } from 'projects/admin/src/app/core/services/grid.service';
import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { Advertisement } from '../dto/advertisment.interface';

@Injectable()
export class AdvertisementService extends GridService<Advertisement> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'cabinet/announcement';
  }

  /**
   *
   * @returns
   */
  getFilterData() {
    return this.$baseService.get<{
      announcement_types: IdName[];
      categories: IdName[];
    }>(`${this.url}/filter-data`);
  }
}
