import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { AdvertisementTypeRequest } from '../dto/advertisement-type.request';
import { AdvertisementTypeResponse } from '../dto/advertisement-type.response';

@Injectable()
export class AdvertisementTypeService extends CrudService<
  AdvertisementTypeResponse,
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
