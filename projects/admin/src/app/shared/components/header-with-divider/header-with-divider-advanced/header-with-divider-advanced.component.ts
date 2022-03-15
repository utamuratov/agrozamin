import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { SearchInputAdvancedConfig } from '../../search-input/search-input-advanced/search-input-advanced.component';

export interface HeaderWithDividerAdvancedConfig {
  title: string;
  searchInputAdvancedConfig: SearchInputAdvancedConfig;
}

@Component({
  selector: 'az-header-with-divider-advanced',
  templateUrl: './header-with-divider-advanced.component.html',
})
export class HeaderWithDividerAdvancedComponent {
  /**
   *
   */
  @Input()
  config!: HeaderWithDividerAdvancedConfig;

  /**
   *
   */
  @Output()
  changedFilteredData = new EventEmitter<NzSafeAny[]>();

  /**
   *
   */
  @Output()
  clickedAddEditButton = new EventEmitter();

  /**
   *
   */
  filterData(filteredData: NzSafeAny[]) {
    this.changedFilteredData.emit(filteredData);
  }

  /**
   *
   */
  addEdit() {
    this.clickedAddEditButton.emit();
  }
}
