import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from '../../../core/services/crud.service';
import { Role } from './models/role.interface';
import { RoleResponse } from './models/role.response';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends CrudService<RoleResponse, Role> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/role';
  }
}
