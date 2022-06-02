import { GridQuery } from 'ngx-az-core';

export class AdvertisementConstants {
  public static readonly PAGINATION_PAGE_SIZE = 10;
  public static readonly DEFAULT_PAGE_INDEX = 1;
  public static readonly DEFAULT_GRID_QUERY: GridQuery = {
    pageIndex: this.DEFAULT_PAGE_INDEX,
    pageSize: this.PAGINATION_PAGE_SIZE,
    sortField: '',
    sortOrder: '',
    filter: [],
  };
}
