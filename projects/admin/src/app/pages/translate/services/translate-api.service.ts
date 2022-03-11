import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { TranslationType } from '../../../core/enums/translation-type.enum';
import { AddTranslationRequest } from '../models/add-translation.request';
import { Translation } from '../models/translation.interface';

@Injectable()
export class TranslateApiService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getTranslations(
    translationType: TranslationType
  ): Observable<BaseResponse<Translation[]>> {
    const params = new HttpParams().append('type', translationType);
    return this.$baseService.get<Translation[]>('admin/translate', params);
  }

  addTranslation(
    model: AddTranslationRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$baseService.post<Translation>('admin/translate', model);
  }

  editTranslation(
    id: number,
    model: AddTranslationRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$baseService.put<Translation>('admin/translate/' + id, model);
  }

  deleteTranslation(id: number): Observable<BaseResponse<Translation>> {
    return this.$baseService.delete<Translation>('admin/translate/' + id);
  }
}
