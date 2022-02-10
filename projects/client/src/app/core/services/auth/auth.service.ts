import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestSignIn } from '../../../shared/models/auth/request-sign-in.interface';
import { RequestSignUp } from '../../../shared/models/auth/request-sign-up.interface';
import { SuccessMessage } from '../../models/success-message.interface';
import { BaseService } from '../base.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {

  /**
   *
   * @param model
   * @returns
   */
  signIn(model: RequestSignIn) {
    return this.post<RequestSignIn>('login', model);
  }

  /**
   *
   * @param params
   * @returns
   */
  signUp(model: RequestSignUp): Observable<SuccessMessage> {
    return this.post<SuccessMessage>('registration', model);
  }
}
