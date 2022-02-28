import { Injectable } from '@angular/core';
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
import { RefreshTokenResponse } from '../../../shared/models/auth/refresh-token.response';
import { RestoreLoginRequest } from '../../../shared/models/auth/restore-login.request';
import { RestoreLoginResponse } from '../../../shared/models/auth/restore-login.response';
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
  resendAccountActivationCode(
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

  /**
   *
   * @param model should be {email} or {phone}
   * @returns
   */
  restoreLoginFirstStep(model: RestoreLoginRequest): Observable<Message> {
    return this.$baseService.post<Message>('restore-login-step-one', model);
  }

  /**
   *
   * @param model should be {email, secure_code} or {phone, secure_code}
   * @returns
   */
  restoreLoginSecondStep(
    model: RestoreLoginRequest
  ): Observable<RestoreLoginResponse> {
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
  ): Observable<ChangePasswordStepOneResponse> {
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
  changePasswordStepTwo(model: ChangePasswordStepTwoRequest): Observable<any> {
    return this.$baseService.post<any>('change-password-step2', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  changePasswordStepThree(
    model: ChangePasswordStepThreeRequest
  ): Observable<any> {
    return this.$baseService.post<any>('change-password-step3', model);
  }

  /**
   *
   * @param model
   * @returns
   */
  changePasswordStepFour(
    model: ChangePasswordStepFourRequest
  ): Observable<boolean> {
    return this.$baseService.post<boolean>('change-password-step4', model);
  }
}
