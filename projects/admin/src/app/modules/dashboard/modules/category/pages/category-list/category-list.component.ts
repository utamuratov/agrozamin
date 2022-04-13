import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LanguageState, Language, NgDestroy } from 'ngx-az-core';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { CategoryResponse } from '../../models/category.response';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'az-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less'],
})
export class CategoryListComponent implements OnInit {
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
    this.loadData();
  }

  loadData() {
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
        new Column({
          field: 'id',
          sortable: true,
          sortByLocalCompare: false,
          nzLeft: true,
        }),
      ];
      languages.forEach((language) => {
        this.columns.push(
          new Column({
            field: 'name.' + language.code,
            header: language.name,
            sortable: true,
          })
        );
      });
      this.columns.push(new Column({ field: 'icon', header: 'icon' }));
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
          this.loadData();
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
