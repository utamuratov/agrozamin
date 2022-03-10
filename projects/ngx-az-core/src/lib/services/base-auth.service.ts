import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { BaseResponse } from '../models/base-response.interface';
import { RefreshTokenRequest } from '../models/refresh-token.request';
import { RefreshTokenResponse } from '../models/refresh-token.response';
import { ISignInRequest } from '../models/sign-in.request';
import { SignInResponse } from '../models/sign-in.response';
import { AccessToken, RefreshToken } from '../shared/store/auth/auth.action';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BaseAuthService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService, private $store: Store) {}

  /**
   *
   * @param model
   * @returns
   */
  signIn(model: ISignInRequest) {
    return this.$baseService.post<SignInResponse>('login', model).pipe(
      tap((result) => {
        if (result.success) {
          this.$store.dispatch(new AccessToken(result.data.access_token));
          this.$store.dispatch(new RefreshToken(result.data.refresh_token));
        }
      })
    );
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
            this.$store.dispatch(new AccessToken(result.data.access_token));
            this.$store.dispatch(new RefreshToken(result.data.refresh_token));
          }
        })
      );
  }
}
