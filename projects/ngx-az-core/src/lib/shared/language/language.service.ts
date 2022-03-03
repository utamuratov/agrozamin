import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response.interface';
import { Language } from '../../models/language.interface';
import { BaseService } from '../../services/base.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private $baseService: BaseService) {}

  getLanguages(): Observable<BaseResponse<Language[]>> {
    return this.$baseService.get<Language[]>('language');
  }

  getDefaultLanguageCode(): Observable<BaseResponse<{ language: string }>> {
    return this.$baseService.get<{ language: string }>('language/default');
  }
}
