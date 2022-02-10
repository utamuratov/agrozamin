import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISignInRequest } from '../../../shared/models/auth/sign-in.request';
import { SignInResponse } from '../../../shared/models/auth/sign-in.response';
import { SignUpRequest } from '../../../shared/models/auth/sign-up.request';
import { SuccessMessage } from '../../models/success-message.interface';
import { BaseService } from '../base.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  /**
   *
   * @param model
   * @returns
   */
  signIn(model: ISignInRequest) {
    return this.post<SuccessMessage<SignInResponse>>('login', model).pipe(
      map((result) => {
        return result.data;
      })
    );
  }

  /**
   *
   * @param params
   * @returns
   */
  signUp(model: SignUpRequest): Observable<SuccessMessage> {
    return this.post<SuccessMessage>('registration', model);
  }
}
