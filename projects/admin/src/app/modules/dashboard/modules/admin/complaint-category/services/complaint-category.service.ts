import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { ComplaintCategoryRequest } from '../dto/complaint-category.request';
import { ComplaintCategoryResponse } from '../dto/complaint-category.response';

@Injectable({
  providedIn: 'root',
})
export class ComplaintCategoryService extends CrudService<
  ComplaintCategoryResponse,
  ComplaintCategoryRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement/complaint-category';
  }
}
