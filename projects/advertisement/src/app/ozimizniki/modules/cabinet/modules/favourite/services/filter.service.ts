import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { SavedFilter } from '../dto/saved-filter.interface';

@Injectable({ providedIn: 'root' })
export class FilterService extends GridService<SavedFilter> {
  /**
   *
   * @param $base
   */
  constructor(protected $base: BaseService) {
    super($base);
    this.url = 'cabinet/saved-filter';
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: number) {
    return this.$base.delete(this.url + '/' + id);
  }

  /**
   *
   * @param id
   * @returns
   */
  switchOnOffNotification(id: number) {
    return this.$base.get(this.url + `/notification/${id}`);
  }
}
