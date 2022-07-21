import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdvertisementConstants } from '../../core/constants/advertisement.constants';

@Component({
  selector: 'az-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponent {
  /**
   *
   */
  @Input()
  pageSize = AdvertisementConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  @Input()
  pageIndex = AdvertisementConstants.DEFAULT_PAGE_INDEX;

  /**
   *
   */
  @Input()
  total!: number;

  /**
   *
   */
  @Output()
  pageIndexChange = new EventEmitter<number>();
}
