import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { GridModel } from '../models/grid-model';
import { Translation } from '../models/translation.interface';

@Injectable()
export class TranslateApiService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getTranslations(): Observable<BaseResponse<GridModel<Translation>>> {
    return this.$baseService.get<GridModel<Translation>>('admin/translate');
  }
}
