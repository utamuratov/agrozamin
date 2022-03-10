import { Constants } from '../../../config/constants';

export interface AuthStateModel {
  /**
   *
   */
  [Constants.ACCESS_TOKEN]: string | null;

  /**
   *
   */
  [Constants.REFRESH_TOKEN]: string | null;
}
