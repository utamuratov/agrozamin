import { HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Language, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { Project } from 'projects/admin/src/app/core/enums/project.enum';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { map, Observable, takeUntil } from 'rxjs';
import { AdvertiementTypeResponse } from '../../models/advertisement-type.response';
import { CategoriesFilters } from '../../models/categories-filters.interface';
import { CategoryEditingData } from '../../models/category-editing-data';
import { CategoryWithChild } from '../../models/category-with-child.interface';
import { CategoryRequest } from '../../models/category.request';
import { CategoryResponse } from '../../models/category.response';
import { Filter } from '../../models/filter.model';
import { AdvertisementTypeService } from '../../services/advertisement-type.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'az-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less'],
})
export class CategoryListComponent
  extends BaseComponent<CategoryResponse, CategoryRequest, CategoryEditingData>
  implements OnInit
{
  /**
   *
   */
  categoriesAsTree!: NzTreeNodeOptions[];

  /**
   *
   */
  filtersAsTree!: NzTreeNodeOptions[];

  /**
   *
   */
  advertisementTypes!: AdvertiementTypeResponse[];

  /**
   *
   */
  projectId!: number;

  constructor(
    protected $category: CategoryService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private $advertisementType: AdvertisementTypeService
  ) {
    super($category, $destroy, cd);
    this.searchInputConfig.keys = ['id', 'name'];
    const path = route.snapshot.url[0].path;
    this.projectId = Project[path as keyof typeof Project];
    this.params = new HttpParams().append('project_id', this.projectId);
  }

  /**
   *
   */
  override ngOnInit(): void {
    this.getAllCategoriesAndFilters().subscribe((result) => {
      this.categoriesAsTree = this.getCategoriesAsTree(result.categories);
      this.filtersAsTree = this.getFiltersAsTree(result.filters);
      this.getAdvertiesmentTypes();
      super.ngOnInit();
    });
  }

  /**
   *
   * @param filters
   * @returns
   */
  private getFiltersAsTree(filters: Filter[]) {
    return filters.map((filter) => {
      return {
        title: `${filter.name}`,
        description: `${filter.name}`,
        key: `${filter.id}`,
        isLeaf: !filter.parameters.length,
        children: filter.parameters.map((parameter) => {
          return {
            title: `${filter.name} - ${parameter.label}`,
            key: `${filter.id}${AdminConstants.SPLITTER_FOR_TREE}${parameter.id}`,
            description: `${parameter.label}`,
            isLeaf: true,
            value: parameter.id,
          } as NzTreeNodeOptions;
        }),
      } as NzTreeNodeOptions;
    });
  }

  /**
   *
   * @param categories
   * @returns
   */
  private getCategoriesAsTree(
    categories?: CategoryWithChild[]
  ): NzTreeNodeOptions[] {
    if (!categories?.length) {
      return [];
    }
    return categories.map((category) => {
      return {
        title: `${category.name}`,
        description: `${category.name}`,
        key: `${category.id}`,
        isLeaf: !category.child?.length,
        value: category.id,
        children: this.getCategoriesAsTree(category.child),
      };
    });
  }

  /**
   *
   * @returns
   */
  getAllCategoriesAndFilters(): Observable<CategoriesFilters> {
    return this.$category.getAllCategoriesAndFilters(this.projectId).pipe(
      map((result) => {
        if (result.success) {
          return result.data;
        }

        return { categories: [], filters: [] };
      })
    );
  }

  /**
   *
   */
  getAdvertiesmentTypes() {
    this.$advertisementType
      .getAll()
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        if (result.success) {
          this.advertisementTypes = result.data;
        }
      });
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        new Column({
          field: 'id',
          sortable: true,
          sortByLocalCompare: false,
          nzLeft: true,
        }),
        new Column({ field: 'icon', header: 'icon', hasTemplate: true }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'name.' + language.code,
              header: language.name,
              sortable: true,
            })
        ),
        new Column({
          field: 'parent',
          header: 'parentCategories',
          hasTemplate: true,
        }),
        new Column({
          field: 'filter',
          header: 'filters',
          hasTemplate: true,
        }),
        new Column({
          field: 'announcement_type',
          header: 'advertisementType',
          hasTemplate: true,
        }),
      ];
      this.makeWidthConfig(languages);
    });
  }

  /**
   *
   * @param languages
   */
  private makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      AdminConstants.WIDTH_COLUMN_ID,
      '100px',
      ...languages.map(() => ''),
      '200px',
      '200px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  override addEdit(editingData?: CategoryResponse) {
    if (editingData) {
      const filters: string[] = [];
      editingData.filter.forEach((filter) => {
        filter.parameters.forEach((parameter) => {
          filters.push(
            `${filter.id}${AdminConstants.SPLITTER_FOR_TREE}${parameter.id}`
          );
        });
      });
      this.editingData = {
        id: editingData.id,
        name: editingData.name,
        announcement_types: editingData.announcement_type.map(
          (w) => w.announcement_type_id
        ),
        filters,
        parent_categories: editingData.parent.map((w) => w.id + ''),
      };
    } else {
      this.editingData = undefined;
    }
    super.addEdit(this.editingData);
  }

  /**
   *
   */
  override modified() {
    this.getAllCategoriesAndFilters().subscribe((result) => {
      this.categoriesAsTree = this.getCategoriesAsTree(result.categories);
      super.modified();
    });
  }
}
