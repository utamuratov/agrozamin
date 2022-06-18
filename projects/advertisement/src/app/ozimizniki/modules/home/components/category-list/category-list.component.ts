import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'az-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  /**
   *
   */
  category$!: Observable<Category[]>;

  /**
   *
   */
  constructor(private $category: CategoryService) {}

  /**
   *
   */
  ngOnInit() {
    this.getCategories();
  }

  /**
   *
   */
  getCategories() {
    this.category$ = this.$category.getAll();
  }
}
