import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { SpamCategoryRequest } from '../dto/spam-category.request';
import { SpamCategoryResponse } from '../dto/spam-category.response';

@Injectable({
  providedIn: 'root',
})
export class SpamCategoryService extends CrudService<
  SpamCategoryResponse,
  SpamCategoryRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement/spam-category';
  }
}
