import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'az-advertisement-list-header',
  templateUrl: './advertisement-list-header.component.html',
  styleUrls: ['./advertisement-list-header.component.less'],
})
export class AdvertisementListHeaderComponent implements OnInit {
  /**
   *
   */
  @Input()
  isInline!: boolean;

  /**
   *
   */
  @Output()
  isInlineChange = new EventEmitter<boolean>();

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

  isMapActive = false;
  date = false;
  filterParams = false;

  params = [
    { id: 1, title: 'Куплю' },
    { id: 2, title: 'Андижанская область' },
    { id: 3, title: 'от 500 000 сум' },
    { id: 4, title: 'Страна производства: Россия' },
  ];

  constructor(private route: ActivatedRoute) {
    if (route.snapshot.params['categoryId']) {
      this.filterParams = true;
    }
  }

  ngOnInit() {
    // TODO
  }

  /**
   *
   */
  toggleCardStyle() {
    this.isInline = !this.isInline;
    this.isInlineChange.emit(this.isInline);
  }

  /**
   *
   */
  toggleSortByPrice() {
    this.sortedByDateDescanding = false;
    this.sortedByPriceDescanding = !this.sortedByPriceDescanding;
    this.sortedByPriceDescandingChange.emit(this.sortedByPriceDescanding);
  }

  /**
   *
   */
  toggleSortByDate() {
    this.sortedByPriceDescanding = false;
    this.sortedByDateDescanding = !this.sortedByDateDescanding;
    this.sortedByDateDescandingChange.emit(this.sortedByDateDescanding);
  }

  isMap() {
    this.isMapActive = !this.isMapActive;
  }

  byDate() {
    this.date = true;
  }

  byPrice() {
    this.date = false;
  }

  onClose(): void {
    console.log('tag was closed.');
  }

  deleteParam(id: number) {
    this.params = this.params.filter((e) => e.id != id);
  }
}
