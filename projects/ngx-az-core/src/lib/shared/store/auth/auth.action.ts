import { AuthorizedUserModel } from '../../../models/authorized-user.interface';

export class AccessToken {
  /**
   *
   */
  static readonly type = '[Auth API] Get access token';

  /**
   *
   * @param accessToken
   */
  constructor(public accessToken: string) {}
}

export class RefreshToken {
  /**
   *
   */
  static readonly type = '[Auth API] Get refresh token';

  /**
   *
   * @param refreshToken
   */
  constructor(public refreshToken: string) {}
}

export class AuthorizedUser {
  /**
   *
   */
  static readonly type = '[Auth API] Get authorized user';

  /**
   *
   * @param authorizedUser
   */
  constructor(public authorizedUser: AuthorizedUserModel) {}
}
