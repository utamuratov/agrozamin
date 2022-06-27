import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryForBreadcrumb } from 'projects/advertisement/src/app/shared/models/category-for-breadcrumb.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'az-breadcrumb-advertisement',
  templateUrl: './breadcrumb-advertisement.component.html',
  styleUrls: ['./breadcrumb-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbAdvertisementComponent extends Breadcrumb {
  /**
   *
   */
  private _categorySequence!: string;
  public get categorySequence(): string {
    return this._categorySequence;
  }
  @Input()
  public set categorySequence(v: string) {
    if (v.length > 0) {
      this._categorySequence = v;
      this.getCategoriesBySequence();
    }
  }

  @Input()
  title = true;

  /**
   *
   */
  category$!: Observable<CategoryForBreadcrumb[]>;

  /**
   *
   * @param router
   * @param $category
   * @param cd
   */
  constructor(
    protected override router: Router,
    private $category: CategoryService,
    private cd: ChangeDetectorRef
  ) {
    super(router);
  }

  /**
   *
   */
  private getCategoriesBySequence() {
    this.category$ = this.$category
      .getCategoriesByCategorySequence(this.categorySequence)
      .pipe(
        map((categories) => {
          categories.forEach((category, index) => {
            if (index === 0) {
              category.sequence = category.id + '';
            } else {
              category.sequence = `${categories[index - 1].sequence}${
                AdvertisementConstants.SPLITTER_CATEGORY_ID
              }${category.id}`;
            }

            category.neighbor_categories.forEach((neighbour) => {
              if (index === 0) {
                neighbour.sequence = neighbour.id + '';
              } else {
                neighbour.sequence = `${categories[index - 1].sequence}${
                  AdvertisementConstants.SPLITTER_CATEGORY_ID
                }${neighbour.id}`;
              }
            });
          });

          return categories;
        })
      );
  }
}
