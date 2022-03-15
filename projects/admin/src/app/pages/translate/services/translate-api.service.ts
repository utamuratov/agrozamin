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
   */
  readonly url = 'admin/translate';

  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getTranslations(
    translationType: TranslationType
  ): Observable<BaseResponse<Translation[]>> {
    const params = new HttpParams().append('type', translationType);
    return this.$baseService.get<Translation[]>(this.url, params);
  }

  addTranslation(
    model: AddTranslationRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$baseService.post<Translation>(this.url, model);
  }

  editTranslation(
    id: number,
    model: AddTranslationRequest
  ): Observable<BaseResponse<Translation>> {
    return this.$baseService.put<Translation>(`${this.url}/${id}`, model);
  }

  deleteTranslation(id: number): Observable<BaseResponse<Translation>> {
    return this.$baseService.delete<Translation>(`${this.url}/${id}`);
  }
}
