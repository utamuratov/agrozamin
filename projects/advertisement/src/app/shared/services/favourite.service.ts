import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';

@Injectable()
export class FavouriteService {
  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @param model
   * @returns
   */
  addDeleteFavourite(model: { announcement_id: number }) {
    return this.$base.post('cabinet/favorite', model);
  }
}
