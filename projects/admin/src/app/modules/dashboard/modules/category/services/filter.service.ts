import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { FilterRequest } from '../models/filter.request';
import { FilterResponse } from '../models/filter.response';

@Injectable()
export class FilterService extends CrudService<FilterResponse, FilterRequest> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/filter';
  }
}
