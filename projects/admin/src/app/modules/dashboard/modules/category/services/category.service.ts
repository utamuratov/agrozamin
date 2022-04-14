import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
import { CategoriesFilters } from '../models/categories-filters.interface';
import { CategoryRequest } from '../models/category.request';
import { CategoryResponse } from '../models/category.response';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

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

  getAllCategoriesAndFilters(): Observable<BaseResponse<CategoriesFilters>> {
    return this.$baseService.get<CategoriesFilters>(`${this.url}/create`);
  }

  override add(
    model: CategoryRequest
  ): Observable<BaseResponse<CategoryResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post<CategoryResponse>(this.url, formData);
  }

  override edit(
    id: number,
    model: CategoryRequest
  ): Observable<BaseResponse<CategoryResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.put(`${this.url}/${id}`, formData);
  }

  private convertModelIntoFormData(model: CategoryRequest) {
    const formData = new FormData(); //this.obj2FormData(model);
    if (model.icon) {
      formData.append('icon', model.icon, model.icon?.name);
    }
    formData.append('name', JSON.stringify(model.name));
    formData.append('filters', JSON.stringify(model.filters));
    formData.append(
      'parent_categories',
      JSON.stringify(model.parent_categories)
    );
    return formData;
  }

  obj2FormData(obj: NzSafeAny) {
    const formData: FormData = new FormData();
    this.createFormData(obj, '', formData);

    return formData;
  }

  createFormData(obj: NzSafeAny, subKeyStr = '', formData: FormData) {
    for (const i in obj) {
      const value = obj[i];
      if (value instanceof File) {
        formData.append(i, value, value?.name);
        continue;
      }
      const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        value instanceof Date ||
        typeof value === 'boolean'
      ) {
        formData.append(subKeyStrTrans, value.toString());
      } else if (typeof value === 'object') {
        this.createFormData(value, subKeyStrTrans, formData);
      }
    }
  }
}
