import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService<TResponse = NzSafeAny, TBody = NzSafeAny> {
  /**
   *
   */
  protected url = '';

  /**
   *
   * @param $baseService
   */
  constructor(protected $baseService: BaseService) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<BaseResponse<TResponse[]>> {
    return this.$baseService.get<TResponse[]>(this.url);
  }

  /**
   *
   * @returns
   */
  add(model: TBody): Observable<BaseResponse<TResponse>> {
    return this.$baseService.post<TResponse>(this.url, model);
  }

  /**
   *
   * @returns
   */
  edit(id: number, model: TBody): Observable<BaseResponse<TResponse>> {
    return this.$baseService.put<TResponse>(`${this.url}/${id}`, model);
  }

  /**
   *
   * @returns
   */
  delete(id: number): Observable<BaseResponse<TResponse>> {
    return this.$baseService.delete<TResponse>(`${this.url}/${id}`);
  }
}
