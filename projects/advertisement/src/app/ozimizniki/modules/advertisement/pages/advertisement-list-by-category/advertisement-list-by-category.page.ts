import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cat } from './subcategory';

@Component({
  templateUrl: './advertisement-list-by-category.page.html',
  styleUrls: ['./advertisement-list-by-category.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListByCategoryPage implements OnInit {
  /**
   *
   */
  @Input()
  categoryId!: number;

  categories = cat;
  subCategory: any = [];

  constructor(private route: ActivatedRoute) {
    this.categoryId = this.route.snapshot.params['categoryId'];
  }

  ngOnInit() {
    this.subCategory = cat[0].subcategory;
  }

  handleCategory($event: number) {
    this.subCategory = cat.filter((e) => e.id === $event)[0].subcategory;
  }
}
