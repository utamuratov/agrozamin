import { GridQuery } from 'ngx-az-core';

export class AdvertisementConstants {
  public static readonly PAGINATION_PAGE_SIZE = 12;
  public static readonly DEFAULT_PAGE_INDEX = 1;
  public static readonly DEFAULT_GRID_QUERY: GridQuery = {
    pageIndex: this.DEFAULT_PAGE_INDEX,
    pageSize: this.PAGINATION_PAGE_SIZE,
    sortField: '',
    sortOrder: '',
    filter: [],
  };

  public static readonly SPLITTER_CATEGORY_ID = '_';
  public static readonly SPLITTER_BETWEEN_FILTERID_AND_VALUE = '_';
  public static readonly SPLITTER_FILTERID_VALUE = ';';

  public static readonly ROUTER_PATH_ADVERTISEMENTS = 'advertisements';
  public static readonly ROUTER_PATH_SELLERS = 'sellers';
  public static readonly ROUTER_PARAM_CATEGORY_ID = 'categoryId';
  public static readonly ROUTER_PARAM_SELLER_ID = 'sellerId';
  public static readonly ROUTER_PARAM_ADVERTISEMENT_ID = 'advertisementId';
  public static readonly QUERY_PARAM_CHARACTERISTICS = 'characteristics';

  // RESOLVERS
  public static readonly RESOLVERS_SELLERS = 'sellers';
  public static readonly RESOLVERS_FAVORITE_ADVERTISEMENTS = 'advertisements';
  public static readonly RESOLVERS_ADVERTISEMENTS_BY_CATEGORY =
    'advertisementsByCategory';
  public static readonly RESOLVERS_ADVERTISEMENT_DETAILS =
    'advertisementDetails';
  public static readonly RESOLVERS_BREADCRUMB_BY_CATEGORY_SEQUENCE =
    'breadcrumbByCategorySequence';
}
