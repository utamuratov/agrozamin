import { ChangeDetectorRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { GridLogic, GridModel, GridQuery, GridService } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { IBaseComponent } from '../../base/base-component.interface';
import { Column } from '../models/column.interface';

export class GridLogicAdmin<TData = NzSafeAny>
  extends GridLogic<TData>
  implements IBaseComponent
{
  /**
   *
   */
  override get DEFAULT_DATA(): GridModel<TData> {
    const data = [] as TData[];
    // TODO: REMOVE
    // for (let index = 0; index < AdminConstants.PAGINATION_PAGE_SIZE; index++) {
    //   data.push({} as TData);
    // }
    return {
      current_page: AdminConstants.DEFAULT_PAGE_INDEX,
      data,
      per_page: AdminConstants.PAGINATION_PAGE_SIZE,
      total: AdminConstants.PAGINATION_PAGE_SIZE,
    };
  }

  /**
   *
   */
  override pageSize = AdminConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  override DEFAULT_QUERY: GridQuery = AdminConstants.DEFAULT_GRID_QUERY;

  /**
   *
   */
  columns: Column[];

  /**
   *
   */
  nzWidthConfig: string[];

  /**
   *
   * @param $data
   * @param cd
   */
  constructor(
    protected override $data: GridService<TData>,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, cd);
    this.columns = [];
    this.nzWidthConfig = [];
    this.makeColumnsForGrid();
  }

  /**
   *
   * @param params
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || '';
    const sortOrder = (currentSort && currentSort.value) || '';

    this.loadDataFromServer({
      pageIndex,
      pageSize,
      sortField,
      sortOrder,
      filter,
    });
  }

  /**
   *
   */
  makeWidthConfig(): void {
    throw new Error('Method not implemented.');
  }

  /**
   *
   */
  makeColumnsForGrid(): void {
    throw new Error('Method not implemented.');
  }
}
