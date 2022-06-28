import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { Advertisement } from '../../ozimizniki/modules/advertisement/dto/advertisement.interface';

@Injectable({ providedIn: 'root' })
export class FavouriteService extends GridService<Advertisement> {
  /**
   *
   * @param $base
   */
  constructor(protected $base: BaseService) {
    super($base);
    this.url = 'cabinet/favorite';
  }

  /**
   *
   * @param model
   * @returns
   */
  addDeleteFavourite(model: { announcement_id: number }) {
    return this.$base.post(this.url, model);
  }
}
