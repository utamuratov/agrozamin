import { Constants } from '../config/constants';
import { LocalStorageUtilit } from '../utilits/local-storage.utilit';
import { getDomain } from '../utilits/utilits';
import { SettingsHelper } from './settings.helper';

/**
 *
 */
export function jwtOptionsFactory() {
  return {
    /** specifies where to get token */
    tokenGetter: () => {
      return LocalStorageUtilit.get(Constants.ACCESS_TOKEN);
    },
    whitelistedDomains: [getDomain(SettingsHelper.settings.endpoint)],
    allowedDomains: [getDomain(SettingsHelper.settings.endpoint)],
    // skipWhenExpired:
    //   true /** If set true jwt token will not be attached to request when token is expired */,
  };
}
