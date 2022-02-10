import { Constants } from '../../../core/config/constants';

export interface ISignInRequest {
  client_id: string;
  client_secret: string;
  login: string;
  password: string;
}

export class SignInRequest implements ISignInRequest {
  client_id: string;
  client_secret: string;
  login: string;
  password: string;
  /**
   *
   */
  constructor(login: string, password: string) {
    this.client_id = Constants.CLIENT_ID;
    this.client_secret = Constants.CLIENT_SECRET;
    this.login = login;
    this.password = password;
  }
}
