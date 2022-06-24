import { Constants } from '../../../config/constants';
import { AuthorizedUserModel } from '../../../models/authorized-user.interface';

export interface AuthStateModel {
  /**
   *
   */
  [Constants.ACCESS_TOKEN]: string | null;

  /**
   *
   */
  [Constants.REFRESH_TOKEN]: string | null;

  /**
   *
   */
  authorizedUser: AuthorizedUserModel | null;
}
