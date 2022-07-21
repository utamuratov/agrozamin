import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { CrudService } from 'projects/admin/src/app/core/services/crud.service';
import { Observable } from 'rxjs';
import { Company } from '../models/company.interface';
import { CompanyRequest } from '../models/company.request';
import { CompanyResponse } from '../models/company.response';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends CrudService<CompanyResponse, Company> {
  /**
   *
   * @param $baseService
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'cabinet/company';
  }

  override add(
    model: CompanyRequest
  ): Observable<BaseResponse<CompanyResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post<CompanyResponse>(this.url, formData);
  }

  override edit(
    id: number,
    model: CompanyRequest
  ): Observable<BaseResponse<CompanyResponse>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post(`${this.url}/${id}`, formData);
  }

  private convertModelIntoFormData(model: CompanyRequest) {
    const formData = new FormData();
    if (model.photo) {
      formData.append('photo', model.photo, model.photo?.name);
    }
    formData.append('name', model.name);
    formData.append('bank', model.bank);
    formData.append('inn', model.inn.toString());
    formData.append('mfo', model.mfo.toString());
    formData.append('address', model.address);
    formData.append('settlement_account', model.settlement_account.toString());
    return formData;
  }
}
