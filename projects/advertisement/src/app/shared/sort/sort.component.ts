import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'az-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent {
  /**
   *
   */
  sortedByPrice = true;

  /**
   *
   */
  sortedByPriceDescanding!: boolean;

  /**
   *
   */
  @Output()
  sortedByPriceDescandingChange = new EventEmitter<boolean>();

  /**
   *
   */
  sortedByDateDescanding!: boolean;

  /**
   *
   */
  @Output()
  sortedByDateDescandingChange = new EventEmitter<boolean>();

  /**
   *
   */
  toggleSortByPrice() {
    this.sortedByPrice = true;
    this.sortedByDateDescanding = false;
    this.sortedByPriceDescanding = !this.sortedByPriceDescanding;
    this.sortedByPriceDescandingChange.emit(this.sortedByPriceDescanding);
  }

  /**
   *
   */
  toggleSortByDate() {
    this.sortedByPrice = false;
    this.sortedByPriceDescanding = false;
    this.sortedByDateDescanding = !this.sortedByDateDescanding;
    this.sortedByDateDescandingChange.emit(this.sortedByDateDescanding);
  }
}
