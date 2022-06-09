import { Component, Input, OnInit } from '@angular/core';
import { cat } from '../../../category/components/category-page/subcategory';
import { partnerProd } from './partnerData';

@Component({
  selector: 'az-catalog-partner-posts',
  templateUrl: './catalog-partner-posts.component.html',
  styleUrls: ['./catalog-partner-posts.component.less']
})
export class CatalogPartnerPostsComponent implements OnInit {
  categories = cat
  id = 1  
  isActive = false
  partnerProducts = partnerProd
  cardStyleTemplate = false;
  @Input() categoryId!: number;
  isLoading = true;
  products = partnerProd;
  cardSizeIndex = 6;

  visible = false;


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  handleCategory(id: number) {
    this.id = id;
  }

  isGrid() {
    this.isActive = false;
  }

  isList() {
    this.isActive = true;
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
