import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { RequestRole } from '../../../dto/roles/request-role.interface';
import { RolesList } from '../../../dto/roles/roles-list.interface';
import { Role } from '../../../dto/roles/roles.interface';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  /**
   *
   */
  readonly baseUrl = 'admin/role';

  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<BaseResponse<Role[]>> {
    return this.$baseService.get<Role[]>(this.baseUrl);
  }

  /**
   *
   * @returns
   */
  getList(): Observable<BaseResponse<RolesList[]>> {
    return this.$baseService.get<RolesList[]>(`${this.baseUrl}/create`);
  }

  /**
   *
   * @param body
   * @returns
   */
  add(body: RequestRole): Observable<BaseResponse<RequestRole>> {
    return this.$baseService.post<RequestRole>(this.baseUrl, body);
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: number): Observable<BaseResponse<void>> {
    return this.$baseService.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   *
   * @param id
   * @param body
   * @returns
   */
  update(id: number, body: RequestRole): Observable<BaseResponse<RequestRole>> {
    return this.$baseService.put<RequestRole>(`${this.baseUrl}/${id}`, body);
  }
}
