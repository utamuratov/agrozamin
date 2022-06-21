import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  deepClone,
  Filter,
  FilterParameter,
  InputTypeForFilter,
} from 'ngx-az-core';
import { map, of, tap } from 'rxjs';
import { CategoryFilterService } from './category-filter.service';

@Component({
  selector: 'az-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoryFilterService],
})
export class CategoryFilterComponent {
  /**
   *
   */
  private _queryParams!: Params;
  public get queryParams(): Params {
    return this._queryParams;
  }
  @Input()
  public set queryParams(v: Params | undefined) {
    if (v) {
      this._queryParams = v;
      if (this.filters.length > 0) {
        this.filters = deepClone(this.initialFilters);
        this.makeFiltersFromQueryParams(this.filters);
      }
    }
  }

  /**
   *
   */
  private _categoryId!: number;
  public get categoryId(): number {
    return this._categoryId;
  }
  @Input()
  public set categoryId(v: number | undefined) {
    if (v) {
      this._categoryId = v;
      this.getFiltersByCategoryId(this.categoryId).subscribe((data) => {
        this.filters = data;
        this.initialFilters = deepClone(this.filters);
        this.makeFiltersFromQueryParams(this.filters);
      });
    }
  }

  /**
   *
   */
  @Output()
  filtersChange = new EventEmitter<Filter[]>();

  /**
   *
   */
  filters: Filter[] = [];

  /**
   *
   */
  initialFilters: Filter[] = [];

  /**
   *
   */
  InputTypeForFilter = InputTypeForFilter;

  /**
   *
   */
  lastClickedParameter?: FilterParameter;

  constructor(
    private $categoryFilter: CategoryFilterService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   * @param categoryId
   */
  getFiltersByCategoryId(categoryId: number) {
    return this.$categoryFilter.getFiltersByCategoryId(categoryId).pipe(
      map((result) => {
        if (result.success) {
          this.cd.markForCheck();
          return result.data;
        }

        return [] as Filter[];
      })
    );
  }

  /**
   *
   * @param filters
   */
  private makeFiltersFromQueryParams(filters: Filter[]) {
    const characteristics: string[] =
      this.route.snapshot.queryParams['characteristics']?.split(';');
    if (characteristics) {
      characteristics.forEach((character) => {
        const filterAndValue = character.split('_'); // 2_5 = filterId_value
        const filter = filters.find(
          (filter) => filter.filter_id === +filterAndValue[0]
        );
        if (filter) {
          // INPUT TYPE - CHECKBOX
          if (filter.type_for_filter === InputTypeForFilter.Checkbox) {
            const parameter = filter?.parameters.find(
              (p) => p.filter_parameter_id === +filterAndValue[1]
            );
            if (parameter) {
              parameter.checked = true;
            }

            if (!Array.isArray(filter.value)) {
              filter.value = [];
            }
            (filter.value as number[]).push(+filterAndValue[1]);

            return;
          }

          // INPUT TYPE - ANOTHER
          filter.value = filterAndValue[1];
        }
      });

      this.filtersChange.emit(deepClone(filters));
    }
  }

  /**
   *
   * @param value
   * @param filter
   */
  onChangeCheckbox(value: number[], filter: Filter): void {
    filter.value = value;
  }

  /**
   *
   * @param parameter
   */
  clickCheckbox(parameter: FilterParameter) {
    this.lastClickedParameter = parameter;
  }

  /**
   *
   */
  popoverVisibleChanged() {
    setTimeout(() => {
      if (!this.lastClickedParameter?.visiblePopover) {
        this.searchByFilter();
      }
    });
  }

  /**
   *
   */
  searchByFilter() {
    this.closeFilterPopover();

    const characteristics: string[] = [];
    this.filters.forEach((filter) => {
      if (filter.value) {
        if (filter.type_for_filter === InputTypeForFilter.Checkbox) {
          (filter.value as number[]).forEach((value) => {
            characteristics.push(`${filter.filter_id}_${value}`); // 2_3 => filterId_value
          });
        }
      }
    });

    this.filtersChange.emit(deepClone(this.filters));
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { characteristics: characteristics.join(';') },
    });
  }

  /**
   *
   */
  clearFilter() {
    this.closeFilterPopover();
    this.filters = deepClone(this.initialFilters);
    this.filtersChange.emit(deepClone(this.filters));
    this.router.navigate([], {
      relativeTo: this.route,
    });
  }

  /**
   *
   */
  closeFilterPopover() {
    if (this.lastClickedParameter)
      this.lastClickedParameter.visiblePopover = false;
  }
}
