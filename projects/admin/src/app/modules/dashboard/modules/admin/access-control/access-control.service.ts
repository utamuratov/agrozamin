import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { AccessControl } from './models/access-control.interface';
import { AccessControlResponse } from './models/access-control.response';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService extends CrudService<
  AccessControlResponse,
  AccessControl
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/access-control';
  }
}
