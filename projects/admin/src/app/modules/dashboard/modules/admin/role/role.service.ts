import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
import { AddEditRole } from './models/add-edit-role.interface';
import { ControlAction } from './models/control-action.interface';
import { RoleResponse } from './models/role.response';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends CrudService<RoleResponse, AddEditRole> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/role';
  }

  getControlAction(): Observable<BaseResponse<ControlAction[]>> {
    return this.$baseService.get<ControlAction[]>(`${this.url}/create`);
  }
}
