import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Constants } from '../config/constants';
import { ISignInRequest } from '../models/sign-in.request';
import { SignInResponse } from '../models/sign-in.response';
import { LocalStorageUtilit } from '../utilits/local-storage.utilit';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BaseAuthService {
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
}
