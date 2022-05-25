import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AdvertisementEditResponse } from '../dto/advertisement-edit.response';
import { AddAdvertisementService } from './add-advertisement.service';

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
