import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { Observable } from 'rxjs';
import { GridModel } from '../../translate/models/grid-model';
import { GridQuery } from '../../translate/models/grid-query.interface';
import { RoleService } from '../role/role.service';
import { AdminUserBody } from './models/admin-user.body';
import { AdminUserResponse } from './models/admin-user.response';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService extends CrudService<
  AdminUserResponse,
  AdminUserBody
> {
  /**
   *
   * @param $baseService
   */
  constructor(
    protected override $baseService: BaseService,
    private $role: RoleService
  ) {
    super($baseService);
    this.url = 'admin/user';
  }

  getAllGridData(
    query: GridQuery
  ): Observable<BaseResponse<GridModel<AdminUserResponse>>> {
    let params = new HttpParams()
      .append('page', `${query.pageIndex}`)
      .append('per_page', `${query.pageSize}`)
      .append('sort_by', `${query.sortField}`)
      .append('order_by', `${query.sortOrder.replace('end', '')}`);
    query.filter.forEach((filterItem) => {
      filterItem.value.forEach((value) => {
        params = params.append(filterItem.key, value);
      });
    });

    return this.$baseService.get(this.url, params);
  }

  getRoles(): Observable<BaseResponse<IdKeyDescription[]>> {
    return this.$role.getRoleList();
  }

  blockUser(
    isBlocked: boolean,
    userId: number
  ): Observable<BaseResponse<boolean>> {
    return this.$baseService.post<boolean>(`${this.url}/block`, {
      id: userId,
      blocked: isBlocked,
    });
  }
}
