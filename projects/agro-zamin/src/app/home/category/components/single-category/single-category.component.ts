import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'az-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.less']
})
export class SingleCategoryComponent implements OnInit {
  @Input() categories: any = []
  @Output() subcategory = new EventEmitter<number>()
  id = 1
  constructor(private location: Location) { }

  ngOnInit() {
  }

  handleCategory(id: number) {
    this.id = id;
    this.subcategory.emit(this.id)
  }

  back() {
    this.location.back()
  }

}
