import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface SearchInputAdvancedConfig<T = NzSafeAny> {
  /**
   * filtered data
   */
  data: T[];

  /**
   *
   */
  filteredData: T[];

  /**
   * search by these keys
   */
  keys: string[];

  /**
   *
   */
  searchText: string;

  /**
   *
   */
  isLoadingData?: boolean;
}

@Component({
  selector: 'az-search-input-advanced',
  templateUrl: './search-input-advanced.component.html',
  styleUrls: ['./search-input-advanced.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputAdvancedComponent {
  /**
   *
   * Required
   */
  private _config!: SearchInputAdvancedConfig;

  @Input()
  public set config(v: SearchInputAdvancedConfig) {
    this._config = v;

    // TODO: IMPROVE THIS LOGIC
    setTimeout(() => {
      this.search(this.config.searchText);
      this.cd.markForCheck();
    });
  }

  public get config(): SearchInputAdvancedConfig {
    return this._config;
  }

  /**
   *
   */
  search(searchText: string, isKeyUpEnter?: boolean) {
    if (searchText.length === 0) {
      this.config.filteredData = this.config.data;
      return;
    }

    if (searchText.length < 3 && !isKeyUpEnter) {
      return;
    }

    this.config.filteredData = this.config.data.filter((item) =>
      this.config.keys.find((key) => {
        if (typeof item[key] === 'object') {
          return Object.keys(item[key]).find((subKey) =>
            this.isIncludes(item[key][subKey].toString(), searchText)
          );
        }
        return this.isIncludes(item[key].toString(), searchText);
      })
    );
  }

  isIncludes(searchedText: string, searchingText: string) {
    return searchedText.toLowerCase().includes(searchingText.toLowerCase());
  }

  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {}
}
