import { RefreshTokenResponse } from './refresh-token.response';

export interface SignInResponse extends RefreshTokenResponse {
  user_id: number;
}
