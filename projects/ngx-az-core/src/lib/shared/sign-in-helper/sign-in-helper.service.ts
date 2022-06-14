import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { catchError, Observable, of, shareReplay, tap } from 'rxjs';
import { BaseResponse } from '../../models/base-response.interface';
import { ErrorItem } from '../../models/error-item.interface';
import { ISignInRequest } from '../../models/sign-in.request';
import { SignInResponse } from '../../models/sign-in.response';
import { BaseAuthService } from '../../services/base-auth.service';
import { BaseService } from '../../services/base.service';
import { AccessToken, RefreshToken } from '../store/auth/auth.action';

@Injectable({
  providedIn: 'root',
})
export class SignInHelperService extends BaseAuthService {
  /**
   * admin endpoint
   */
  readonly endpoint = 'http://62.209.129.41/api/v1/'; // 'http://192.168.1.118/api/v1/';

  constructor(
    protected override $baseService: BaseService,
    protected override $store: Store,
    private http: HttpClient
  ) {
    super($baseService, $store);
  }

  /**
   *
   * @param model
   * @returns
   */
  override signIn(
    model: ISignInRequest
  ): Observable<BaseResponse<SignInResponse>> {
    return this.http
      .post<BaseResponse<SignInResponse>>(this.endpoint + 'login', model)
      .pipe(
        catchError((errors: ErrorItem[]) => {
          this.$baseService.makeError(errors);
          return of({
            error: errors,
            success: false,
          } as BaseResponse<SignInResponse>);
        }),
        shareReplay(1),
        tap((result) => {
          if (result.success) {
            this.$store.dispatch(new AccessToken(result.data.access_token));
            this.$store.dispatch(new RefreshToken(result.data.refresh_token));
          }
        })
      );
  }
}
