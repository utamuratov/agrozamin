import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { map } from 'rxjs';
import { Category } from '../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private $base: BaseService) {}

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
}
