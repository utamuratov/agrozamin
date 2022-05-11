import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
import { CategoriesFilters } from '../models/categories-filters.interface';
import { CategoryRequest } from '../models/category.request';
import { CategoryResponse } from '../models/category.response';

@Injectable()
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

  getAllCategoriesAndFilters(
    projectId: number
  ): Observable<BaseResponse<CategoriesFilters>> {
    const params = new HttpParams().set('project_id', projectId);
    return this.$baseService.get<CategoriesFilters>(
      `${this.url}/create`,
      params
    );
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
    const formData = new FormData();
    if (model.icon) {
      formData.append('icon', model.icon, model.icon?.name);
    }
    formData.append('project_id', model.project_id.toString());
    formData.append('name', JSON.stringify(model.name));
    formData.append(
      'announcement_types',
      JSON.stringify(model.announcement_types)
    );
    formData.append('filters', JSON.stringify(model.filters));
    formData.append(
      'parent_categories',
      JSON.stringify(model.parent_categories)
    );
    return formData;
  }
}
