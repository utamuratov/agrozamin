import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { AdvertisementEditResponse } from '../dto/advertisement-edit.response';
import { AdvertisementRequest } from '../dto/advertisement.request';
import { CategoryType } from '../dto/category-type.interface';
import { Filter } from '../dto/filter.interface';
import { ReferencesForCreate } from '../dto/references-for-create.interface';

@Injectable({ providedIn: 'root' })
export class AddAdvertisementService {
  /**
   *
   * @param $baseService
   */
  constructor(private $baseService: BaseService) {}

  /**
   *
   * @returns
   */
  getReferencesForCreate() {
    return this.$baseService.get<ReferencesForCreate>(
      'cabinet/announcement/create'
    );
  }

  /**
   *
   * @param categoryId
   * @returns
   */
  getFiltersByCategoryId(categoryId: number) {
    return this.$baseService.get<Filter[]>(
      `cabinet/announcement/category-filter/${categoryId}`
    );
  }

  /**
   *
   * @param categoryId
   * @returns
   */
  getCategoryTypesByCategoryId(categoryId: number) {
    return this.$baseService.get<CategoryType[]>(
      `cabinet/announcement/category-type/${categoryId}`
    );
  }

  /**
   *
   * @param id
   * @returns
   */
  getAdvertisementForEditById(id: number) {
    return this.$baseService.get<AdvertisementEditResponse>(
      `cabinet/announcement/${id}/edit`
    );
  }

  /**
   *
   * @param model
   * @returns
   */
  add(model: AdvertisementRequest): Observable<BaseResponse<any>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post<any>('cabinet/announcement', formData);
  }

  /**
   *
   * @param model
   * @returns
   */
  edit(id: number, model: AdvertisementRequest): Observable<BaseResponse<any>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.put<any>('cabinet/announcement/' + id, formData);
  }

  /**
   *
   * @param model
   * @returns
   */
  private convertModelIntoFormData(model: AdvertisementRequest) {
    const formData = new FormData();
    if (model.files) {
      // formData.append('files', JSON.stringify(model.files));
      model.files.forEach((file, index) => {
        formData.append(`files[${index}]`, file, file?.name);
      });
    }
    formData.append('name', model.name.toString());
    formData.append('price', model.price.toString());
    formData.append('deal', model.deal.toString());
    formData.append('category_id', model.category_id.toString());
    formData.append('type_id', model.type_id.toString());
    formData.append('description', model.description);
    formData.append('characteristics', JSON.stringify(model.characteristics));
    formData.append('district_id', model.district_id.toString());
    formData.append('contact', JSON.stringify(model.contact));
    formData.append('address', model.address);
    formData.append('use_agroid_contact', model.use_agroid_contact.toString());
    formData.append('location', JSON.stringify(model.location));
    formData.append('video_url', model.video_url);
    formData.append('deleted_files', JSON.stringify(model.deleted_files));

    return formData;
  }
}
