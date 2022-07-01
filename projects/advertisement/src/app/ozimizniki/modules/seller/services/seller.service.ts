import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { map } from 'rxjs';
import { Advertisement } from '../../advertisement/dto/advertisement.interface';
import { SellerDetails } from '../dto/seller-details.interface';

@Injectable({
  providedIn: 'root',
})
export class SellerService extends GridService<Advertisement> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'user/announcement';
  }

  /**
   *
   * @param sellerId
   * @returns
   */
  getDetails(sellerId: number) {
    return this.$baseService.get<SellerDetails>('user/card/' + sellerId);
  }
}
