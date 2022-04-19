import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { ChangeEmailRequest } from '../models/change-email.request';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  changeEmail(request: ChangeEmailRequest): Observable<any> {
    return this.$baseService.post<any>('cabinet/change-email-step-1', request);
  }
}
