import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './advertisement-list.page.html',
  styleUrls: ['./advertisement-list.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListPage implements OnInit {
  /**
   *
   */
  category$!: Observable<Category[]>;

  constructor(private $category: CategoryService) {}

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
