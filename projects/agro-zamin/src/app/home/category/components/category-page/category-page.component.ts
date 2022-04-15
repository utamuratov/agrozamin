import { Component, OnInit } from '@angular/core';
import { cat } from './subcategory';

@Component({
  selector: 'az-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.less']
})
export class CategoryPageComponent implements OnInit {
  categories = cat
  subCategory: any = []
  constructor() { }

  ngOnInit() {
    this.subCategory = cat[0].subcategory
  }

  handleCategory($event: number) {
    this.subCategory = cat.filter(e => e.id === $event)[0].subcategory
  }
}
