import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
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
    return this.getAll(params);
  }
}
