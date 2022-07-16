import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { BlockAdvertisement } from '../dto/block-advertisement.request';
import { ComplaintedAdvertisement } from '../dto/complainted-advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class ComplaintedUserService extends GridService<ComplaintedAdvertisement> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement/complaint';
  }

  /**
   *
   */
  block(modal: BlockAdvertisement) {
    return this.$baseService.post('admin/announcement/block', modal);
  }
}
