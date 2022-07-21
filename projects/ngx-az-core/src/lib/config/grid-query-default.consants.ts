import { GridQuery } from '../models/grid-query.interface';

export class GridQueryConstants {
  public static readonly PAGINATION_PAGE_SIZE = 12;
  public static readonly DEFAULT_PAGE_INDEX = 1;
  public static readonly DEFAULT_GRID_QUERY: GridQuery = {
    pageIndex: this.DEFAULT_PAGE_INDEX,
    pageSize: this.PAGINATION_PAGE_SIZE,
    sortField: '',
    sortOrder: '',
    filter: [],
  };
}
