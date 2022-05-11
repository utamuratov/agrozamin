import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { ReferencesForCreate } from '../dto/references-for-create.interface';

@Injectable()
export class AddAdvertisementService {
  constructor(private $baseService: BaseService) {}

  getReferencesForCreate() {
    return this.$baseService.get<ReferencesForCreate>(
      'cabinet/announcement/create'
    );
  }
}
