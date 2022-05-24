import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { AdvertisementRequest } from '../dto/advertisement.request';
import { AdvertisementResponse } from '../dto/advertisement.response';

@Injectable()
export class AdvertisementService extends CrudService<
  AdvertisementResponse,
  AdvertisementRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement';
  }
}
