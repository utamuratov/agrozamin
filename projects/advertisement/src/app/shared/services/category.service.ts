import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { CategoryForBreadcrumb } from '../models/category-for-breadcrumb.interface';
import { CategoryTree } from '../models/category-tree.interface';
import { Category } from '../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private $base: BaseService) {}

  /**
   *
   */
  getAll(categoryId?: number) {
    if (categoryId) {
      return this.$base
        .get<Category[]>(
          'category',
          new HttpParams().set('category_id', categoryId.toString())
        )
        .pipe(map((result) => result.data));
    }

    return this.$base
      .get<Category[]>('category')
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param categorySequence
   * @returns
   */
  getCategoriesByCategorySequence(
    categorySequence: string
  ): Observable<CategoryForBreadcrumb[]> {
    return this.$base
      .get<{ categories: CategoryForBreadcrumb[] }>(
        'category/breadcrumb',
        new HttpParams().set('categories', categorySequence)
      )
      .pipe(map((result) => result.data.categories));
  }

  /**
   *
   * @returns
   */
  getAllAsTree() {
    return this.$base
      .get<CategoryTree[]>('category/tree')
      .pipe(map((w) => w.data));
  }
}
