import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { Observable } from 'rxjs';
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

  /**
   *
   */
  category$!: Observable<Category[]>;

  subCategory: any = [];

  constructor(
    private route: ActivatedRoute,
    private $category: CategoryService
  ) {
    this.categoryId = this.route.snapshot.params['categoryId'];
  }

  ngOnInit() {
    this.subCategory = cat[0].subcategory;
    this.getCategoryByCategoryId(this.categoryId);
  }

  getCategoryByCategoryId(categoryId: number) {
    this.category$ = this.$category.getAll(categoryId);
  }

  handleCategory($event: number) {
    this.subCategory = cat.filter((e) => e.id === $event)[0].subcategory;
  }
}
