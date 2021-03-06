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

  /**
   *
   * @param advertisementId
   * @returns
   */
  addArchive(advertisementId: number) {
    return this.$baseService.put<boolean>('cabinet/announcements/archive', {
      announcement_id: advertisementId,
    });
  }

  /**
   *
   * @param advertisementId
   * @returns
   */
  unArchive(advertisementId: number) {
    return this.$baseService.put<boolean>('cabinet/announcements/unarchive', {
      announcement_id: advertisementId,
    });
  }
}
