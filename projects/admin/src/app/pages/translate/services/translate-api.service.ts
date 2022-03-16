import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { TranslationType } from '../../../core/enums/translation-type.enum';
import { CrudService } from '../../../core/services/crud.service';
import { AddTranslationRequest } from '../models/add-translation.request';
import { Translation } from '../models/translation.interface';

@Injectable()
export class TranslateApiService extends CrudService<
  Translation,
  AddTranslationRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/translate';
  }

  getTranslations(
    translationType: TranslationType
  ): Observable<BaseResponse<Translation[]>> {
    const params = new HttpParams().append('type', translationType);
    return this.$baseService.get<Translation[]>(this.url, params);
  }
}
