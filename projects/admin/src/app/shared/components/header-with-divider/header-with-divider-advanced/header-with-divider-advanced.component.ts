import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  clickedAddEditButton = new EventEmitter();

  /**
   *
   */
  addEdit() {
    this.clickedAddEditButton.emit();
  }
}
