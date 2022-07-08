import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';

@Component({
  templateUrl: './advertisement-list.page.html',
  styleUrls: ['./advertisement-list.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListPage {
  /**
   *
   */
  categories!: Category[];

  /**
   *
   * @param $category
   */
  constructor(private route: ActivatedRoute) {
    this.categories = this.route.snapshot.data['categories'];
  }
}
