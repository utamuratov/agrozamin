import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
import { BusinessCardRequest } from '../models/business-card.request';
import { BusinessCardResponse } from '../models/business-card.response';

@Injectable()
export class BusinessCardService extends CrudService<
  BusinessCardResponse,
  BusinessCardRequest
> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'cabinet/business-card';
  }

  override add(
    model: BusinessCardRequest
  ): Observable<BaseResponse<BusinessCardResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post<BusinessCardResponse>(this.url, formData);
  }

  override edit(
    id: number,
    model: BusinessCardRequest
  ): Observable<BaseResponse<BusinessCardResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post(`${this.url}/${id}`, formData);
  }

  private convertModelIntoFormData(model: BusinessCardRequest) {
    const formData = new FormData();
    if (model.photo) {
      formData.append('photo', model.photo, model.photo?.name);
    }
    formData.append('f_name', model.f_name);
    formData.append('l_name', model.l_name);
    formData.append('email', model.email ?? '');
    formData.append('phone', model.phone.toString());
    return formData;
  }
}
