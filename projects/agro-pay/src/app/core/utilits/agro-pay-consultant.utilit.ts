import { Constants } from 'ngx-az-core';
import { environment } from 'projects/agro-pay/src/environments/environment';

export const prefixPath = !environment.production
  ? Constants.AGRO_PAY_ROUTE_PATH
  : Constants.AGROZAMIN_PREFIX_ROUTE_PATH;
