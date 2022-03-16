import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from '../../../core/services/crud.service';
import { AccessAction } from './models/access-action.interface';
import { AccessActionResponse } from './models/access-action.response';

@Injectable({
  providedIn: 'root',
})
export class AccessActionService extends CrudService<
  AccessActionResponse,
  AccessAction
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/access-action';
  }
}
