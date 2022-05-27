import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { GridService } from 'projects/admin/src/app/core/services/grid.service';
import { AdvertisementEditResponse } from '../dto/advertisement-edit.response';
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

  approve(id: number) {
    return this.$baseService.put(`${this.url}/approve/${id}`);
  }

  reject(id: number) {
    return this.$baseService.put(`${this.url}/reject/${id}`);
  }
}
