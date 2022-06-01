import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { GridModel } from '../../modules/dashboard/modules/translate/models/grid-model';
import { GridQuery } from '../../modules/dashboard/modules/translate/models/grid-query.interface';

@Injectable({
  providedIn: 'root',
})
export class GridService<TResponse = NzSafeAny> {
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
   * @param query
   * @returns
   */
  getGridData(
    query: GridQuery,
    url = this.url
  ): Observable<BaseResponse<GridModel<TResponse>>> {
    const params = this.turnGridQueryToHttpParams(query);
    return this.$baseService.get(url, params);
  }

  /**
   *
   * @param query
   * @returns
   */
  private turnGridQueryToHttpParams(query: GridQuery) {
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
    return params;
  }
}
