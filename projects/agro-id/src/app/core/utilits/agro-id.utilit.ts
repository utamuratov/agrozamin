import { Constants } from 'ngx-az-core';
import { environment } from 'projects/agro-id/src/environments/environment';

export const prefixPath = !environment.production
  ? Constants.AGROID_ROUTE_PATH
  : Constants.AGROZAMIN_PREFIX_ROUTE_PATH;
