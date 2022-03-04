import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { GridModel } from '../models/grid-model';
import { TranslationPostRequest } from '../models/translation-post.request';
import { Translation } from '../models/translation.interface';

@Injectable()
export class TranslateApiService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getTranslations(
    pageIndex: number,
    pageSize: number
  ): Observable<BaseResponse<GridModel<Translation>>> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('per_page', `${pageSize}`);
    return this.$baseService.get<GridModel<Translation>>(
      'admin/translate',
      params
    );
  }

  addTranslation(
    model: TranslationPostRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$baseService.post<Translation>('admin/translate', model);
  }

  editTranslation(
    id: number,
    model: TranslationPostRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$baseService.put<Translation>('admin/translate/' + id, model);
  }
}
