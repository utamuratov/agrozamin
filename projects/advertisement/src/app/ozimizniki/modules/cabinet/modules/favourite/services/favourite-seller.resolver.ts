import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GridModel } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { Observable, map } from 'rxjs';
import { Seller } from '../dto/seller.interface';
import { SellerService } from './seller.service';

@Injectable({ providedIn: 'root' })
export class FavouriteSellerResolver implements Resolve<GridModel<Seller>> {
  /**
   *
   */
  constructor(private $data: SellerService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve():
    | Observable<GridModel<Seller>>
    | Promise<GridModel<Seller>>
    | GridModel<Seller> {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    query.filter = [];
    return this.$data.getGridData(query).pipe(map((result) => result.data));
  }
}
