import { Component, Input, OnInit } from '@angular/core';
import { products } from './data';

@Component({
  selector: 'az-all-category-items',
  templateUrl: './all-category-items.component.html',
  styleUrls: ['./all-category-items.component.less'],
})
export class AllCategoryItemsComponent implements OnInit {
  @Input() categoryId!: number;
  isLoading = true;
  products = products;
  cardStyleTemplate = false;
  cardSizeIndex = 6;

  visible = true;



  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onChangeCardStyle($event: boolean) {
    this.cardStyleTemplate = $event;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
