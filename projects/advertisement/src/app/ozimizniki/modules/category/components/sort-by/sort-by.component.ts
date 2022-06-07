import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'az-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.less'],
})
export class SortByComponent implements OnInit {
  isActive = false;
  isMapActive = false;
  date = false;

  @Output() handleGridOrList = new EventEmitter<boolean>();
  constructor() {}

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
    this.date = true
  }

  byPrice() {
    this.date = false
  }
}
