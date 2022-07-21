import { KeyValue } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { finalize } from 'rxjs';
import { GridQueryConstants } from '../config/grid-query-default.consants';
import { Advertisement } from '../models/advertisment.interface';
import { GridModel } from '../models/grid-model';
import { GridQuery } from '../models/grid-query.interface';
import { GridService } from '../services/grid.service';

export class GridLogic<TData = Advertisement> {
  /**
   *
   */
  get DEFAULT_DATA(): GridModel<TData> {
    const data = [];
    for (
      let index = 0;
      index < GridQueryConstants.PAGINATION_PAGE_SIZE;
      index++
    ) {
      data.push({} as TData);
    }
    return {
      current_page: GridQueryConstants.DEFAULT_PAGE_INDEX,
      data,
      per_page: GridQueryConstants.PAGINATION_PAGE_SIZE,
      total: GridQueryConstants.PAGINATION_PAGE_SIZE,
    };
  }

  /**
   *
   */
  DEFAULT_QUERY = GridQueryConstants.DEFAULT_GRID_QUERY;

  /**
   *
   */
  data!: GridModel<TData>;

  /**
   *
   */
  pageSize = GridQueryConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  query!: GridQuery;

  /**
   *
   */
  isLoaded = true;

  /**
   *
   * @param $data
   * @param cd
   */
  constructor(
    protected $data: GridService<TData>,
    protected cd: ChangeDetectorRef
  ) {
    this.init();
  }

  /**
   *
   */
  protected init() {
    this.initQuery();
    this.setDefaultData();
  }

  /**
   *
   */
  protected initQuery() {
    this.query = { ...this.DEFAULT_QUERY };
    this.setQuery();
  }

  /**
   *
   */
  protected setQuery() {
    this.query.filter = this.getQueryFilter();
  }

  /**
   *
   * @returns
   */
  protected getQueryFilter(): KeyValue<string, string[]>[] {
    return [];
  }

  /**
   *
   */
  protected loadDataByInitialQuery() {
    this.initQuery();
    this.loadData();
  }

  /**
   *
   */
  private setDefaultData() {
    this.isLoaded = false;
    this.data = this.DEFAULT_DATA;
  }

  /**
   *
   */
  protected loadDataFromServer(query: GridQuery, url?: string) {
    this.$loadDataFromServer(query, url).subscribe((result) => {
      if (result.success) {
        this.data = {
          ...result.data,
          data: result.data.data,
        };
        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   * @param query
   * @param url
   * @returns
   */
  protected $loadDataFromServer(query: GridQuery, url: string | undefined) {
    return this.$data
      .getGridData(query, url)
      .pipe(finalize(() => (this.isLoaded = true)));
  }

  /**
   *
   * LOAD DATA AGAIN
   */
  protected loadData() {
    this.setDefaultData();
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  onInit() {
    this.loadDataByInitialQuery();
  }

  /**
   *
   */
  sortByPriceDescanding(byDescanding: boolean) {
    this.query.sortField = 'price';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadData();
  }

  /**
   *
   */
  sortByDateDescanding(byDescanding: boolean) {
    this.query.sortField = 'created_at';
    this.query.sortOrder = byDescanding ? 'desc' : 'asc';
    this.loadData();
  }

  /**
   *
   */
  paginate(pageIndex = GridQueryConstants.DEFAULT_PAGE_INDEX) {
    this.query.pageIndex = pageIndex;
    this.loadData();
  }
}
