import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {
  AddAdvertisementService,
  AdvertisementEditResponse,
} from 'ngx-az-core';
import { Observable, map } from 'rxjs';
import { AdvertisementDetails } from '../dto/advertisement-details.interface';
import { AdvertisementService } from './advertisement.service';

@Injectable({ providedIn: 'root' })
export class AdvertisementDetailsResolver
  implements Resolve<AdvertisementDetails>
{
  /**
   *
   */
  constructor(private $data: AdvertisementService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<AdvertisementDetails>
    | Promise<AdvertisementDetails>
    | AdvertisementDetails {
    return this.$data
      .getById(route.params['advertisementId'])
      .pipe(map((result) => result.data));
  }
}
