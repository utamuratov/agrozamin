import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { AdvertisementTypeRequest } from '../models/advertisement-type.request';
import { AdvertiementTypeResponse } from '../models/advertisement-type.response';

@Injectable()
export class AdvertisementTypeService extends CrudService<
  AdvertiementTypeResponse,
  AdvertisementTypeRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement/type';
  }
}
