import { Injectable } from '@angular/core';
import { BaseService, Filter } from 'ngx-az-core';

@Injectable()
export class CategoryFilterService {
  constructor(private $base: BaseService) {}

  getFiltersByCategoryId(categoryId: number) {
    return this.$base.get<Filter[]>(`announcement/filter/${categoryId}`);
  }
}
