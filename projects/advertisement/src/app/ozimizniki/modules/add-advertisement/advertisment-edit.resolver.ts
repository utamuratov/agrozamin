import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {
  AddAdvertisementService,
  AdvertisementEditResponse,
} from 'ngx-az-core';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdvertisementEditResolver
  implements Resolve<AdvertisementEditResponse>
{
  /**
   *
   */
  constructor(private $data: AddAdvertisementService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<AdvertisementEditResponse>
    | Promise<AdvertisementEditResponse>
    | AdvertisementEditResponse {
    return this.$data
      .getAdvertisementForEditById(route.params['id'])
      .pipe(map((result) => result.data));
  }
}
