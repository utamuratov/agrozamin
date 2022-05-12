import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { Filter } from '../dto/filter.interface';
import { ReferencesForCreate } from '../dto/references-for-create.interface';

@Injectable()
export class AddAdvertisementService {
  constructor(private $baseService: BaseService) {}

  getReferencesForCreate() {
    return this.$baseService.get<ReferencesForCreate>(
      'cabinet/announcement/create'
    );
  }

  getFiltersByCategoryId(categoryId: number) {
    return this.$baseService.get<Filter[]>(
      `cabinet/announcement/category-filter/${categoryId}`
    );
  }
}
