import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountActivationRequest } from '../../../shared/models/auth/account-activation.request';
import { AccountActivationResponse } from '../../../shared/models/auth/account-activation.response';
import { CheckLoginRequest } from '../../../shared/models/auth/check-login.request';
import { ISignInRequest } from '../../../shared/models/auth/sign-in.request';
import { SignInResponse } from '../../../shared/models/auth/sign-in.response';
import { SignUpRequest } from '../../../shared/models/auth/sign-up.request';
import { SignUpResponse } from '../../../shared/models/auth/sign-up.response';
import { BaseService } from '../base.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  /**
   *
   * @param model
   * @returns
   */
  signIn(model: ISignInRequest) {
    return this.$baseService.post<SignInResponse>('login', model);
  }

  /**
   *
   * @param params
   * @returns
   */
  signUp(model: SignUpRequest): Observable<SignUpResponse> {
    return this.$baseService.post<SignUpResponse>('registration', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  checkLoginToUnique(model: CheckLoginRequest): Observable<[]> {
    return this.$baseService.post<[]>('check-login', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  sendAccountActivationCode(
    model: AccountActivationRequest
  ): Observable<AccountActivationResponse> {
    return this.$baseService.post<AccountActivationResponse>(
      'account-activation',
      model
    );
  }
}
