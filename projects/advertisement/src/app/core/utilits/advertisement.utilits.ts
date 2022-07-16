import { Constants } from 'ngx-az-core';
import { environment } from 'projects/advertisement/src/environments/environment';

export const prefixPath = environment.production
  ? Constants.AGROZAMIN_PREFIX_ROUTE_PATH
  : Constants.ADVERTISEMENT_ROUTE_PATH;
