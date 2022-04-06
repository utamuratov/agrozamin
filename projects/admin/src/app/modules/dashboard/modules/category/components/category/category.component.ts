import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { CategoryResponse } from '../../models/category.response';
import { CategoryService } from '../../services/category.service';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less'],
})
export class CategoryComponent implements OnInit {
  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<CategoryResponse> = {
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
  editingData?: CategoryResponse;

  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  columns: Column[] = [];

  constructor(
    private $category: CategoryService,
    private $destroy: NgDestroy
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.searchInputConfig = {
      ...this.searchInputConfig,
      data: [
        {
          icon: 'tt',
          name: { ru: 'Aname', uz_cyrl: 'name', uz_latn: 'name' },
          id: 1,
          subCategories: [],
        },
        {
          icon: 't',
          name: { ru: 'Cname', uz_cyrl: 'name', uz_latn: 'name' },
          id: 2,
          subCategories: [],
        },
      ],
    };

    this.makeColumnsForGrid();
  }

  makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        {
          field: 'id',
          header: 'id',
          sortable: true,
          sortByLocalCompare: false,
          width: '70px',
          nzLeft: true,
        },
      ];
      languages.forEach((language) => {
        this.columns.push({
          field: 'name.' + language.code,
          header: language.name,
          sortable: true,
          sortByLocalCompare: true,
        });
      });
      this.columns.push({ field: 'icon', header: 'icon' });
    });
  }

  /**
   *
   */
  delete(id: number) {
    this.$category
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        if (response.success) {
          this.getCategories();
        }
      });
  }

  /**
   *
   */
  addEdit(editingData?: CategoryResponse) {
    this.editingData = editingData;
    this.isVisible = true;
  }
}
