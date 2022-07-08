import { Injectable } from '@angular/core';
import {
  AdvertisementEditResponse,
  BaseService,
  GridService,
} from 'ngx-az-core';
import { AdvertisementGetAll } from '../dto/advertisement-get-all.interface';

@Injectable()
export class AdvertisementService extends GridService<AdvertisementGetAll> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement';
  }

  /**
   *
   * @param id
   * @returns
   */
  getAdvertisementForEditById(id: number) {
    return this.$baseService.get<AdvertisementEditResponse>(
      `${this.url}/${id}/edit`
    );
  }

  /**
   *
   * @param id
   * @returns
   */
  approve(id: number) {
    return this.$baseService.put(`${this.url}/approve/${id}`);
  }

  /**
   *
   * @param id
   * @returns
   */
  reject(id: number, reason_id: number) {
    return this.$baseService.put(`${this.url}/reject`, {
      announcement_id: id,
      reason_id,
    });
  }
}
