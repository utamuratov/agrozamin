import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'az-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.less'],
})
export class SearchInputComponent {
  /**
   *
   */
  @Output()
  changedSearchText = new EventEmitter<string>();

  /**
   *
   */
  @Input()
  searchText = '';

  /**
   *
   */
  search(searchText: string) {
    this.searchText = searchText;
    this.changedSearchText.emit(this.searchText);
  }
}
