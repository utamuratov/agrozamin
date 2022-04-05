import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { Observable } from 'rxjs';
import { RoleService } from '../admin/role/role.service';
import { GridQuery } from '../translate/models/grid-query.interface';
import { AdminUserBody } from './models/admin-user.body';
import { AdminUserResponse } from './models/admin-user.response';
import { Moderator } from './models/moderator.interface';

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

  /**
   *
   * @returns
   */
  getRoles(): Observable<BaseResponse<IdKeyDescription[]>> {
    return this.$role.getRoleList();
  }

  /**
   *
   * @param query
   * @returns
   */
  getAgroIdUsers(query: GridQuery) {
    return this.getGridData(query, `${this.url}/agroid`);
  }

  /**
   *
   */
  getModerators(): Observable<BaseResponse<Moderator[]>> {
    return this.$baseService.get<Moderator[]>(`admin/moderator/list`);
  }

  /**
   *
   * @param isBlocked
   * @param userId
   * @returns
   */
  blockUser(
    isBlocked: boolean,
    userId: number
  ): Observable<BaseResponse<boolean>> {
    return this.$baseService.post<boolean>(`${this.url}/block`, {
      id: userId,
      blocked: isBlocked,
    });
  }

  /**
   *
   * @param moderator_id
   * @param users
   * @returns
   */
  asignUsersToModerator(moderator_id: number, users: number[]) {
    return this.$baseService.post(`${this.url}/attach-to-moderator`, {
      moderator_id,
      users,
    });
  }
}
