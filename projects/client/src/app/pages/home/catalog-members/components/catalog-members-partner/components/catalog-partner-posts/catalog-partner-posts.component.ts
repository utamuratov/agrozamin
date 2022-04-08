import { Component, OnInit } from '@angular/core';
import { cat } from '../../../../../category/components/category-page/subcategory';
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
  defaultImage = './assets/images/agrozamin/default-img-card.jpg'

  constructor() { }

  ngOnInit(): void {
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
}
