import { Component, EventEmitter, Output } from '@angular/core';

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
  searchText = '';

  /**
   *
   */
  search(searchText: string) {
    this.searchText = searchText;
    this.changedSearchText.emit(this.searchText);
  }
}
