import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Constants } from '../../../config/constants';
import { LocalStorageUtilit } from '../../../utilits/local-storage.utilit';
import { AuthStateModel } from './auth-state.model';
import { AccessToken, RefreshToken } from './auth.action';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    access_token: LocalStorageUtilit.get(Constants.ACCESS_TOKEN),
    refresh_token: LocalStorageUtilit.get(Constants.REFRESH_TOKEN),
  },
})
@Injectable()
export class AuthState {
  /**
   *
   * @param state State model
   */
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.access_token;
  }

  /**
   *
   * @param state State model
   */
  @Selector()
  static refreshToken(state: AuthStateModel): string | null {
    return state.refresh_token;
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(AccessToken)
  setAccessToken(ctx: StateContext<AuthStateModel>, action: AccessToken) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      access_token: action.accessToken,
    });
    LocalStorageUtilit.set(Constants.ACCESS_TOKEN, action.accessToken);
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(RefreshToken)
  setRefreshToken(ctx: StateContext<AuthStateModel>, action: RefreshToken) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      refresh_token: action.refreshToken,
    });
    LocalStorageUtilit.set(Constants.REFRESH_TOKEN, action.refreshToken);
  }
}
