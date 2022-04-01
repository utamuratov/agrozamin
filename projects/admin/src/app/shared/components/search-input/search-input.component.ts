import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'az-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  /**
   *
   */
  @Output()
  searchTextChange = new EventEmitter<string>();

  /**
   *
   */
  @Input()
  searchText = '';

  /**
   *
   */
  @Input()
  width = '300px';

  @Input()
  showSearchIcon = true;

  /**
   *
   */
  search(searchText: string) {
    this.searchText = searchText;
    this.searchTextChange.emit(this.searchText);
  }
}
