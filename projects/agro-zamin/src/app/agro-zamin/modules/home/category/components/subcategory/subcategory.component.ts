import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { cat } from '../category-page/subcategory';

@Component({
  selector: 'az-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.less']
})
export class SubcategoryComponent implements OnInit, OnChanges {
  @Input('subCategory') cat: any = []
  myCat: any = []
  id = 1
  isVisible = false

  btnVisible = true

  constructor() { }

  ngOnChanges(): void {
    this.myCat = this.cat.filter((e:any) => e.id < 5);
    if (this.cat.length < 5) {
      this.btnVisible = false
    } else {
      this.btnVisible = true
    }
  }

  ngOnInit() {
    this.myCat = this.cat.filter((e:any) => e.id < 5);
  }

  activeCategory(id: number) {
    this.id = id
  }

  showAndHideCategories() {   
    this.isVisible = !this.isVisible
    if (this.isVisible) {
      this.myCat = this.cat;  
    } else {
      this.myCat = this.cat.filter((e:any) => e.id < 5);
    }
      
  }
}
