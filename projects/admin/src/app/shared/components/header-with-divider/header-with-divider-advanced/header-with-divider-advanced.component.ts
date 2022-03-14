import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'az-header-with-divider-advanced',
  templateUrl: './header-with-divider-advanced.component.html',
})
export class HeaderWithDividerAdvancedComponent {
  /**
   *
   */
  @Input()
  title!: string;

  /**
   *
   */
  @Output()
  changedSearchText = new EventEmitter<string>();

  /**
   *
   */
  @Output()
  clickedAddEditButton = new EventEmitter();

  /**
   *
   */
  search(searchText: string) {
    this.changedSearchText.emit(searchText);
  }

  /**
   *
   */
  addEdit() {
    this.clickedAddEditButton.emit();
  }
}
