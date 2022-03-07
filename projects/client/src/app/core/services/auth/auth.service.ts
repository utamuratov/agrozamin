import { Injectable } from '@angular/core';
import {
  BaseAuthService,
  BaseResponse,
  BaseService,
  Constants,
  ISignInRequest,
  LocalStorageUtilit,
  RefreshTokenResponse,
} from 'ngx-az-core';
import { Observable, tap } from 'rxjs';
import { PhoneActivationRequest } from '../../../shared/models/auth/account-activation.request';
import { AccountActivationResponse } from '../../../shared/models/auth/account-activation.response';
import { AskActivationCodeRequest } from '../../../shared/models/auth/ask-activation-code.request';
import { ChangePasswordStepFourRequest } from '../../../shared/models/auth/change-password-step-four.request';
import { ChangePasswordStepOneResponse } from '../../../shared/models/auth/change-password-step-one.response';
import { ChangePasswordStepThreeRequest } from '../../../shared/models/auth/change-password-step-three.request';
import { ChangePasswordStepTwoRequest } from '../../../shared/models/auth/change-password-step-two.request';
import { CheckLoginRequest } from '../../../shared/models/auth/check-login.request';
import { CheckPhoneRequest } from '../../../shared/models/auth/check-phone.request';
import { Login } from '../../../shared/models/auth/login';
import { RefreshTokenRequest } from '../../../shared/models/auth/refresh-token.request';
import { RestoreLoginStepOneRequest } from '../../../shared/models/auth/restore-login-step-one.request';
import { RestoreLoginStepOneResponse } from '../../../shared/models/auth/restore-login-step-one.response';
import { RestoreLoginStepTwoRequest } from '../../../shared/models/auth/restore-login-step-two.request';
import { RestoreLoginResponse } from '../../../shared/models/auth/restore-login.response';
import { SignUpRequest } from '../../../shared/models/auth/sign-up.request';
import { Message } from '../../../shared/models/message.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   *
   * @param $baseService
   */
  constructor(
    private $baseService: BaseService,
    private $baseAuth: BaseAuthService
  ) {}

  /**
   *
   * @param model
   * @returns
   */
  signIn(model: ISignInRequest) {
    return this.$baseAuth.signIn(model);
  }

  /**
   *
   * @param params
   * @returns
   */
  signUp(model: SignUpRequest): Observable<BaseResponse<Message>> {
    return this.$baseService.post<Message>('registration', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  checkLoginToUnique(model: CheckLoginRequest): Observable<BaseResponse<[]>> {
    return this.$baseService.post<[]>('check-login', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  checkPhoneToUnique(model: CheckPhoneRequest): Observable<BaseResponse<[]>> {
    return this.$baseService.post<[]>('check-phone', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  sendActivationCodeToPhone(
    model: PhoneActivationRequest
  ): Observable<BaseResponse<AccountActivationResponse>> {
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
  resendAccountActivationCode(
    model: AskActivationCodeRequest
  ): Observable<BaseResponse<Message>> {
    return this.$baseService.post<Message>('resend-secure-code', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  refreshToken(
    model: RefreshTokenRequest
  ): Observable<BaseResponse<RefreshTokenResponse>> {
    return this.$baseService
      .post<RefreshTokenResponse>('refresh-token', model)
      .pipe(
        tap((result) => {
          if (result.success) {
            LocalStorageUtilit.set(
              Constants.ACCESS_TOKEN,
              result.data.access_token
            );
            LocalStorageUtilit.set(
              Constants.REFRESH_TOKEN,
              result.data.refresh_token
            );
          }
        })
      );
  }

  /**
   *
   * @param model should be {email} or {phone}
   * @returns
   */
  restoreLoginStepOne(
    model: RestoreLoginStepOneRequest
  ): Observable<BaseResponse<RestoreLoginStepOneResponse>> {
    return this.$baseService.post<RestoreLoginStepOneResponse>(
      'restore-login-step-one',
      model
    );
  }

  /**
   *
   * @param model should be {email, secure_code} or {phone, secure_code}
   * @returns
   */
  restoreLoginStepTwo(
    model: RestoreLoginStepTwoRequest
  ): Observable<BaseResponse<RestoreLoginResponse>> {
    return this.$baseService.post<RestoreLoginResponse>(
      'restore-login-step-two',
      model
    );
  }

  /**
   *
   * @param model
   * @returns
   */
  changePasswordStepOne(
    model: Login
  ): Observable<BaseResponse<ChangePasswordStepOneResponse>> {
    return this.$baseService.post<ChangePasswordStepOneResponse>(
      'change-password-step1',
      model
    );
  }

  /**
   *
   * @param model
   * @returns
   */
  changePasswordStepTwo(
    model: ChangePasswordStepTwoRequest
  ): Observable<BaseResponse<any>> {
    return this.$baseService.post<any>('change-password-step2', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  changePasswordStepThree(
    model: ChangePasswordStepThreeRequest
  ): Observable<BaseResponse<any>> {
    return this.$baseService.post<any>('change-password-step3', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  changePasswordStepFour(
    model: ChangePasswordStepFourRequest
  ): Observable<BaseResponse<boolean>> {
    return this.$baseService.post<boolean>('change-password-step4', model);
  }
}
