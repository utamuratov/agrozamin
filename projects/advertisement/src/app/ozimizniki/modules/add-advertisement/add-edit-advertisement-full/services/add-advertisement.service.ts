import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { AdvertisementRequest } from '../dto/advertisement.request';
import { CategoryType } from '../dto/category-type.interface';
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

  getCategoryTypesByCategoryId(categoryId: number) {
    return this.$baseService.get<CategoryType[]>(
      `cabinet/announcement/category-type/${categoryId}`
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

    return formData;
  }
}
