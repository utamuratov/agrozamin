import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { RegionRequest } from '../dto/region.request';
import { RegionResponse } from '../dto/region.response';

@Injectable({ providedIn: 'root' })
export class RegionService extends CrudService<RegionResponse, RegionRequest> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/region';
  }
}
