import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PhoneActivationRequest } from '../../../shared/models/auth/account-activation.request';
import { AccountActivationResponse } from '../../../shared/models/auth/account-activation.response';
import { AskActivationCodeRequest } from '../../../shared/models/auth/ask-activation-code.request';
import { CheckLoginRequest } from '../../../shared/models/auth/check-login.request';
import { CheckPhoneRequest } from '../../../shared/models/auth/check-phone.request';
import { RefreshTokenRequest } from '../../../shared/models/auth/refresh-token.request';
import { RefreshTokenResponse } from '../../../shared/models/auth/refresh-token.response';
import { ISignInRequest } from '../../../shared/models/auth/sign-in.request';
import { SignInResponse } from '../../../shared/models/auth/sign-in.response';
import { SignUpRequest } from '../../../shared/models/auth/sign-up.request';
import { Message } from '../../../shared/models/message.interface';
import { Constants } from '../../config/constants';
import { LocalStorageUtilit } from '../../utilits/local-storage.utilit';
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
    return this.$baseService.post<SignInResponse>('login', model).pipe(
      tap((result) => {
        LocalStorageUtilit.set(Constants.ACCESS_TOKEN, result.access_token);
        LocalStorageUtilit.set(Constants.REFRESH_TOKEN, result.refresh_token);
      })
    );
  }

  /**
   *
   * @param params
   * @returns
   */
  signUp(model: SignUpRequest): Observable<Message> {
    return this.$baseService.post<Message>('registration', model);
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
   checkPhoneToUnique(model: CheckPhoneRequest): Observable<[]> {
    return this.$baseService.post<[]>('check-phone', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  sendActivationCodeToPhone(
    model: PhoneActivationRequest
  ): Observable<AccountActivationResponse> {
    return this.$baseService.post<AccountActivationResponse>(
      'phone-activation',
      model
    );
  }

  /**
   *
   * @param model
   * @returns
   */
  askAccountActivationCode(
    model: AskActivationCodeRequest
  ): Observable<Message> {
    return this.$baseService.post<Message>('resend-secure-code', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  refreshToken(model: RefreshTokenRequest): Observable<RefreshTokenResponse> {
    return this.$baseService
      .post<RefreshTokenResponse>('refresh-token', model)
      .pipe(
        tap((result) => {
          LocalStorageUtilit.set(Constants.ACCESS_TOKEN, result.access_token);
          LocalStorageUtilit.set(Constants.REFRESH_TOKEN, result.refresh_token);
        })
      );
  }
}
