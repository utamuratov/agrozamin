import { Injectable } from '@angular/core';
import { BaseService, GridModel, GridService } from 'ngx-az-core';
import { map } from 'rxjs';
import { AdvertisementDetails } from '../dto/advertisement-details.interface';
import { Advertisement } from '../dto/advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService extends GridService<Advertisement> {
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'announcement';
  }

  /**
   *
   * @param id
   * @returns
   */
  getById(id: number) {
    return this.$baseService.get<AdvertisementDetails>(this.url + '/' + id);
  }

  /**
   *
   * @param advertisementId
   * @returns
   */
  showPhoneNumber(advertisementId: number) {
    return this.$baseService.get(`action/phone/${advertisementId}`);
  }

  /**
   *
   * @returns
   */
  getPopular() {
    return this.$baseService
      .get<GridModel<Advertisement>>(this.url + '/popular')
      .pipe(map((result) => result.data.data));
  }
}
