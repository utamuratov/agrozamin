import { Constants } from 'ngx-az-core';
import { environment } from 'projects/agro-zamin/src/environments/environment';

export const prefixPath = !environment.production
  ? Constants.AGRO_ZAMIN_ROUTE_PATH
  : Constants.AGROZAMIN_PREFIX_ROUTE_PATH;
