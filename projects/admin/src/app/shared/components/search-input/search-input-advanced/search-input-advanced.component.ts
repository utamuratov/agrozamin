import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface SearchInputAdvancedConfig {
  /**
   * filtered data
   */
  data: NzSafeAny[];

  /**
   * search by these keys
   */
  keys: string[];

  /**
   *
   */
  searchText: string;
}

@Component({
  selector: 'az-search-input-advanced',
  templateUrl: './search-input-advanced.component.html',
  styleUrls: ['./search-input-advanced.component.less'],
})
export class SearchInputAdvancedComponent {
  /**
   *
   * Required
   */
  @Input()
  config!: SearchInputAdvancedConfig;

  /**
   *
   */
  @Output()
  filteredData = new EventEmitter<NzSafeAny[]>();

  /**
   *
   */
  search(searchText: string) {
    if (searchText.length === 0) {
      this.filteredData.emit(this.config.data);
      return;
    }

    if (searchText.length < 3) {
      return;
    }

    this.filteredData.emit(
      this.config.data.filter((item) =>
        this.config.keys.find((key) => {
          if (typeof item[key] === 'object') {
            return Object.keys(item[key]).find((subKey) =>
              item[key][subKey].includes(searchText)
            );
          }
          return item[key].includes(searchText);
        })
      )
    );
  }
}
