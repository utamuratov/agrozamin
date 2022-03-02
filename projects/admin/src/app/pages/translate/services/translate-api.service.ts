import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslateApiService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  getTranslations(): Observable<any> {
    return this.$baseService.get<any>('admin/translate');
  }
}
