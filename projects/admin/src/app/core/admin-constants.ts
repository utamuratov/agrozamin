import { GridQuery } from 'ngx-az-core';

export class AdminConstants {
  public static readonly SPLITTER_FOR_TREE = '-';

  public static readonly PAGINATION_PAGE_SIZE = 10;
  public static readonly DEFAULT_PAGE_INDEX = 1;
  public static readonly DEFAULT_GRID_QUERY: GridQuery = {
    pageIndex: this.DEFAULT_PAGE_INDEX,
    pageSize: this.PAGINATION_PAGE_SIZE,
    sortField: '',
    sortOrder: '',
    filter: [],
  };

  public static readonly ROUTER_ADMIN = 'admin';

  public static readonly LOCALIZATION_FROM_RU = 'От';
  public static readonly LOCALIZATION_FROM_UZ_LATN = 'Dan';
  public static readonly LOCALIZATION_FROM_UZ_CYRL = 'Дан';
  public static readonly LOCALIZATION_TO_RU = 'До';
  public static readonly LOCALIZATION_TO_UZ_LATN = 'Gacha';
  public static readonly LOCALIZATION_TO_UZ_CYRL = 'Гача';
  public static readonly LOCALIZATION_MIN_RU = 'Мин.';
  public static readonly LOCALIZATION_MIN_UZ_LATN = 'Min';
  public static readonly LOCALIZATION_MIN_UZ_CYRL = 'Мин';
  public static readonly LOCALIZATION_MAX_RU = 'Макс';
  public static readonly LOCALIZATION_MAX_UZ_LATN = 'Maks';
  public static readonly LOCALIZATION_MAX_UZ_CYRL = 'Макс';

  public static readonly WIDTH_COLUMN_ID = '100px';
  public static readonly WIDTH_COLUMN_KEY = '200px';
  public static readonly WIDTH_COLUMN_LANGUAGE = '220px';
  public static readonly WIDTH_COLUMN_ACTIONS = '130px';
}
