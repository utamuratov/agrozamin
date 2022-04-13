import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import {
  InputTypeForCreator,
  InputTypeForFilter,
} from 'projects/admin/src/app/core/enums/input-type.enum';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { FilterResponse } from '../../models/filter.response';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'az-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterListComponent implements OnInit {
  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<FilterResponse> = {
    data: [],
    filteredData: [],
    keys: ['id', 'name'],
    searchText: '',
  };

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  editingData?: FilterResponse;

  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  columns: Column[] = [];

  /**
   *
   */
  InputTypeForCreator = InputTypeForCreator;

  /**
   *
   */
  InputTypeForFilter = InputTypeForFilter;

  constructor(
    private $filter: FilterService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.makeColumnsForGrid();
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.searchInputConfig.isLoadingData = true;
    this.$filter
      .getAll()
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig.isLoadingData = false;
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   */
  makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        new Column({
          field: 'id',
          sortable: true,
          sortByLocalCompare: false,
          width: '70px',
          nzLeft: true,
          rowspan: 2,
          row: 1,
        }),
        new Column({
          field: 'name',
          colspan: languages.length,
          isHeader: true,
          row: 1,
        }),
        new Column({
          field: 'inputTypes',
          colspan: 2,
          isHeader: true,
          row: 1,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'name.' + language.code,
              header: language.name,
              sortable: true,
              row: 2,
            })
        ),
        new Column({
          field: 'type_for_creator',
          header: 'forCreating',
          hasTemplate: true,
          row: 2,
        }),
        new Column({
          field: 'type_for_filter',
          header: 'forSearching',
          hasTemplate: true,
          row: 2,
        }),
      ];
    });
  }

  /**
   *
   */
  delete(id: number) {
    this.$filter
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        if (response.success) {
          this.loadData();
        }
      });
  }

  /**
   *
   */
  addEdit(editingData?: FilterResponse) {
    this.editingData = editingData;
    this.isVisible = true;
  }
}
