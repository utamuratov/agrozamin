import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { Seller } from '../dto/seller.interface';

@Injectable({ providedIn: 'root' })
export class SellerService extends GridService<Seller> {
  /**
   *
   * @param $base
   */
  constructor(protected $base: BaseService) {
    super($base);
    this.url = 'cabinet/seller/favorite';
  }

  /**
   *
   * @param seller_id
   * @returns
   */
  addRemoveFavorite(seller_id: number) {
    return this.$baseService.post(this.url, { seller_id });
  }
}
