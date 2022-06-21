import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'ngx-az-core';
import { Category } from 'projects/advertisement/src/app/shared/models/category.interface';
import { CategoryService } from 'projects/advertisement/src/app/shared/services/category.service';

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
  private _categoryIds!: string[];
  public get categoryIds(): string[] {
    return this._categoryIds;
  }
  @Input()
  public set categoryIds(v: string[]) {
    if (v.length > 0) {
      this._categoryIds = v;
      this.makeBreadcrumb();
    }
  }

  /**
   *
   */
  categories: Category[][] = [];

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
  private makeBreadcrumb() {
    this.categories = [];
    this.$category.getAll().subscribe((result) => {
      this.categories.push(result);
      this.cd.markForCheck();
    });
    for (let index = 0; index < this.categoryIds.length - 1; index++) {
      const categoryId = +this.categoryIds[index];
      this.$category.getAll(categoryId).subscribe((result) => {
        this.categories.push(result);
        this.cd.markForCheck();
      });
    }
  }
}
