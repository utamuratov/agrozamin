import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { Advertisement } from '../../advertisement/dto/advertisement.interface';

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
}
