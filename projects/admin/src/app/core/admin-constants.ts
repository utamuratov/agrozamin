import { GridQuery } from '../modules/dashboard/modules/translate/models/grid-query.interface';

export class AdminConstants {
  public static readonly SPLITTER_FOR_TREE = '-';

  public static readonly PAGINATION_PAGE_SIZE = 20;
  public static readonly DEFAULT_PAGE_INDEX = 1;
  public static readonly DEFAULT_GRID_QUERY: GridQuery = {
    pageIndex: this.DEFAULT_PAGE_INDEX,
    pageSize: this.PAGINATION_PAGE_SIZE,
    sortField: '',
    sortOrder: '',
    filter: [],
  };
}
