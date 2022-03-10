import { Store } from '@ngxs/store';
import { AuthState } from '../shared/store/auth/auth.state';
import { getDomain } from '../utilits/utilits';
import { SettingsHelper } from './settings.helper';

/**
 *
 */
export function jwtOptionsFactory(store: Store) {
  return {
    /** specifies where to get token */
    tokenGetter: () => {
      return store.selectSnapshot(AuthState.token);
    },
    whitelistedDomains: [getDomain(SettingsHelper.settings.endpoint)],
    allowedDomains: [getDomain(SettingsHelper.settings.endpoint)],
    // skipWhenExpired:
    //   true /** If set true jwt token will not be attached to request when token is expired */,
  };
}
