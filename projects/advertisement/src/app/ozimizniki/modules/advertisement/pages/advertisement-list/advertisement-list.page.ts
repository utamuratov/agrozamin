import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { ParamAndQuery } from '../../dto/param-and-query.interface';

@Component({
  templateUrl: './advertisement-list.page.html',
  styleUrls: ['./advertisement-list.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListPage {
  /**
   *
   */
  filter: ParamAndQuery = {} as ParamAndQuery;

  /**
   *
   */
  categories!: Category[];

  /**
   *
   * @param $category
   */
  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) {
    this.categories = this.route.snapshot.data['categories'];
    this.route.queryParams.subscribe((queryParams) => {
      this.filter = { ...this.filter, queryParams };
      this.cd.markForCheck();
    });
  }
}
