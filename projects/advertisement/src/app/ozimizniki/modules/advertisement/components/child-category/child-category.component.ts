import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'az-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildCategoryComponent {
  /**
   *
   */
  category$!: Observable<Category[]>;

  /**
   *
   */
  private _categoryId!: number;
  public get categoryId(): number {
    return this._categoryId;
  }
  @Input()
  public set categoryId(v: number | undefined) {
    if (v) {
      this._categoryId = v;
      this.getCategoryByCategoryId(this.categoryId);
    }
  }

  /**
   *
   * @param router
   * @param route
   * @param $category
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private $category: CategoryService
  ) {}

  /**
   *
   * @param categoryId
   */
  private getCategoryByCategoryId(categoryId: number) {
    this.category$ = this.$category.getAll(categoryId);
  }

  /**
   *
   * @returns
   */
  back() {
    const categoryId: string | undefined =
      this.route.snapshot.params[
        AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID
      ]?.toString();
    if (categoryId) {
      const lastIndex = categoryId.lastIndexOf(
        AdvertisementConstants.SPLITTER_CATEGORY_ID
      );
      if (lastIndex >= 0) {
        this.router.navigate(['../', categoryId.slice(0, lastIndex)], {
          relativeTo: this.route,
        });
        return;
      }
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  /**
   *
   * @param id
   */
  navigateByCategoryId(id: number) {
    const categoryId =
      this.route.snapshot.params[
        AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID
      ];
    this.router.navigate(
      [
        '../',
        `${categoryId}${AdvertisementConstants.SPLITTER_CATEGORY_ID}${id}`,
      ],
      { relativeTo: this.route }
    );
  }
}
