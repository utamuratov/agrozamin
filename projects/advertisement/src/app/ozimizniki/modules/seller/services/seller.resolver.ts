import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { Observable, map } from 'rxjs';
import { SellerDetails } from '../dto/seller-details.interface';
import { SellerService } from './seller.service';

@Injectable({ providedIn: 'root' })
export class SellerResolver implements Resolve<SellerDetails> {
  /**
   *
   */
  constructor(private $data: SellerService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<SellerDetails> | Promise<SellerDetails> | SellerDetails {
    return this.$data
      .getDetails(route.params[AdvertisementConstants.ROUTER_PARAM_SELLER_ID])
      .pipe(map((result) => result.data));
  }
}
