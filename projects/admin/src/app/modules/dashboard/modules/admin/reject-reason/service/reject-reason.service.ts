import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { map } from 'rxjs';
import { RejectReason } from '../../../advertisement/dto/reject-reason.interface';
import { RejectReasonRequest } from '../dto/reject-reason.request';
import { RejectReasonResponse } from '../dto/reject-reason.response';

@Injectable({ providedIn: 'root' })
export class RejectReasonService extends CrudService<
  RejectReasonResponse,
  RejectReasonRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement/reject-reason';
  }

  /**
   *
   * @returns
   */
  getList() {
    return this.$baseService
      .get<RejectReason[]>(this.url + '/list')
      .pipe(map((result) => result.data));
  }
}
