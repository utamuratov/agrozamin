import { Component, Input, OnInit } from '@angular/core';
import { Filter, InputTypeForFilter } from 'ngx-az-core';
import { FilterService } from './filter.service';

@Component({
  selector: 'az-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {
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
 
   constructor(private $categoryFilter: FilterService) {}
 
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
         }
       });
   }
 
   onChangeCheckbox(value: string[]): void {
     console.log(value);
   }
}
