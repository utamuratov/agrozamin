import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { GridService } from './grid.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService<
  TResponse = NzSafeAny,
  TBody = NzSafeAny
> extends GridService<TResponse> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
  }

  /**
   *
   * @returns
   */
  getAll(params?: HttpParams): Observable<BaseResponse<TResponse[]>> {
    return this.$baseService.get<TResponse[]>(this.url, params);
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
