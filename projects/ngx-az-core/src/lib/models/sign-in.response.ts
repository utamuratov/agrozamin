import { AuthorizedUserModel } from './authorized-user.interface';
import { RefreshTokenResponse } from './refresh-token.response';

export interface SignInResponse
  extends RefreshTokenResponse,
    AuthorizedUserModel {}
