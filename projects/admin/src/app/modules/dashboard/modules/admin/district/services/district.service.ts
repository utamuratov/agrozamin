import { Injectable } from '@angular/core';
import { BaseResponse, BaseService, IdName } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
import { DistrictRequet } from '../dto/district.request';
import { DistrictResponse } from '../dto/district.response';

@Injectable()
export class DistrictService extends CrudService<
  DistrictResponse,
  DistrictRequet
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/district';
  }

  getRegions(): Observable<BaseResponse<IdName[]>> {
    return this.$baseService.get<IdName[]>(this.url + '/create');
  }
}
