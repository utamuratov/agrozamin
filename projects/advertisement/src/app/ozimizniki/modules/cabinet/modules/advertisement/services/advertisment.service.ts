import { Injectable } from '@angular/core';
import { BaseService, GridService, IdName } from 'ngx-az-core';
import { Advertisement } from '../dto/advertisment.interface';

@Injectable({ providedIn: 'root' })
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
