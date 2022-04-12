import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { CategoryRequest } from '../models/category.request';
import { CategoryResponse } from '../models/category.response';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CrudService<
  CategoryResponse,
  CategoryRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/category';
  }
}
