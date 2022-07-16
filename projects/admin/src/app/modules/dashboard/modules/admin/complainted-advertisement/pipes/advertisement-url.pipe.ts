import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from 'ngx-az-core';
import { environment } from 'projects/admin/src/environments/environment';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { ComplaintedAdvertisement } from '../dto/complainted-advertisement.interface';

@Pipe({
  name: 'advertisementUrl',
})
export class AdvertisementUrlPipe implements PipeTransform {
  transform(value: ComplaintedAdvertisement): string {
    return `/${
      environment.production
        ? Constants.AGROZAMIN_PREFIX_ROUTE_PATH
        : Constants.ADVERTISEMENT_ROUTE_PATH
    }/${Constants.DEFAULT_LANGUAGE_CODE}/${
      AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS
    }/${value.announcement_category_id}/${value.id}`;
  }
}
