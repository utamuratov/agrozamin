import { Constants } from 'ngx-az-core';
import { environment } from 'projects/online-consultant/src/environments/environment';

export const prefixPath = !environment.production
  ? Constants.ONLINE_CONSULTANT_ROUTE_PATH
  : Constants.AGROZAMIN_PREFIX_ROUTE_PATH;
