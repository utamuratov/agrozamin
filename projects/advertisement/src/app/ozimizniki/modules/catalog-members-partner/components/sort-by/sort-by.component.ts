import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';

@Component({
  selector: 'az-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.less'],
})
export class SortByComponent implements OnInit {
  @Output() handleGridOrList = new EventEmitter<boolean>();

  isActive = false;
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
    if (
      route.snapshot.params[AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID]
    ) {
      this.filterParams = true;
    }
  }

  ngOnInit() {}

  isGrid() {
    this.isActive = false;
    this.handleGridOrList.emit(false);
  }

  isList() {
    this.isActive = true;
    this.handleGridOrList.emit(true);
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
