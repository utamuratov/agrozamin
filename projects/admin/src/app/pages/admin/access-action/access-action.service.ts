import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { AccessAction } from './models/access-action.interface';
import { AccessActionResponse } from './models/access-action.response';

@Injectable({
  providedIn: 'root',
})
export class AccessActionService {
  /**
   *
   */
  readonly url = 'admin/access-action';

  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getAll(): Observable<BaseResponse<AccessActionResponse[]>> {
    return this.$baseService.get<AccessActionResponse[]>(this.url);
  }

  add(model: AccessAction): Observable<BaseResponse<AccessActionResponse>> {
    return this.$baseService.post<AccessActionResponse>(this.url, model);
  }

  edit(
    id: number,
    model: AccessAction
  ): Observable<BaseResponse<AccessActionResponse>> {
    return this.$baseService.put<AccessActionResponse>(
      `${this.url}/${id}`,
      model
    );
  }

  delete(id: number): Observable<BaseResponse<AccessActionResponse>> {
    return this.$baseService.delete<AccessActionResponse>(`${this.url}/${id}`);
  }
}
