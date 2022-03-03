import { Constants } from "ngx-az-core";

export interface IRefreshTokenRequest {
  refresh_token: string;
  client_id: string;
  client_secret: string;
}

export class RefreshTokenRequest implements IRefreshTokenRequest {
  client_id: string;
  client_secret: string;
  refresh_token: string;
  /**
   *
   */
  constructor(refresh_token: string) {
    this.client_id = Constants.CLIENT_ID;
    this.client_secret = Constants.CLIENT_SECRET;
    this.refresh_token = refresh_token;
  }
}
