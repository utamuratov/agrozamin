import { HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil } from 'rxjs';
import { CrudService } from '../../../core/services/crud.service';
import { Column } from '../grid/models/column.interface';
import { SearchInputAdvancedConfig } from '../search-input/search-input-advanced/search-input-advanced.component';
import { IBaseComponent } from './base-component.interface';

@Component({
  template: '',
})
export class BaseComponent<TResponse, TBody, TEditingData = TResponse>
  implements OnInit, IBaseComponent
{
  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  editingData?: TEditingData;

  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<TResponse> = {
    data: [],
    filteredData: [],
    keys: [],
    searchText: '',
  };

  /**
   *
   */
  columns: Column[] = [];

  /**
   *
   */
  nzWidthConfig: string[] = [];

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  params?: HttpParams;

  /**
   *
   * @param $data
   * @param $destroy
   * @param cd
   */
  constructor(
    protected $data: CrudService<TResponse, TBody>,
    protected $destroy: NgDestroy,
    protected cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.$data
      .getAll(this.params)
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };

          this.makeColumnsForGrid();
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: TEditingData | TResponse) {
    this.editingData = editingData as unknown as TEditingData;
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$data
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        if (response.success) {
          this.modified();
        }
      });
  }

  /**
   *
   */
  close() {
    this.isVisible = false;
  }

  /**
   *
   */
  modified() {
    this.loadData();
  }

  /**
   *
   */
  makeColumnsForGrid() {
    throw new Error('Method not implemented.');
  }

  /**
   *
   */
  makeWidthConfig(languages?: Language[]): void {
    throw new Error('Method not implemented.');
  }
}
