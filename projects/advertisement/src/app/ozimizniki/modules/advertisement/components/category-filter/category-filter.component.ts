import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Filter, InputTypeForFilter } from 'ngx-az-core';
import { CategoryFilterService } from './category-filter.service';

@Component({
  selector: 'az-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoryFilterService],
})
export class CategoryFilterComponent implements OnInit {
  /**
   *
   */
  @Input()
  categoryId!: number;

  /**
   *
   */
  filters: Filter[] = [];

  /**
   *
   */
  InputTypeForFilter = InputTypeForFilter;

  constructor(
    private $categoryFilter: CategoryFilterService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getFiltersByCategoryId(this.categoryId);
  }

  /**
   *
   * @param categoryId
   */
  getFiltersByCategoryId(categoryId: number) {
    this.$categoryFilter
      .getFiltersByCategoryId(categoryId)
      .subscribe((result) => {
        if (result.success) {
          this.filters = result.data;
          this.cd.markForCheck();
        }
      });
  }

  onChangeCheckbox(value: string[]): void {
    console.log(value);
  }
}
