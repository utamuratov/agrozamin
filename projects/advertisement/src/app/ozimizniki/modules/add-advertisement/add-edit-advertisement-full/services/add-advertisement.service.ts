import { Injectable } from '@angular/core';
import { BaseResponse, BaseService } from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { AdvertisementEditResponse } from '../dto/advertisement-edit.response';
import { AdvertisementRequest } from '../dto/advertisement.request';
import { CategoryType } from '../dto/category-type.interface';
import { District } from '../dto/district.interface';
import { Filter } from '../dto/filter.interface';
import { ReferencesForCreate } from '../dto/references-for-create.interface';
import { Region } from '../dto/region.interface';

@Injectable({ providedIn: 'root' })
export class AddAdvertisementService {
  /**
   *
   */
  url!: string;

  /**
   *
   * @param $baseService
   */
  constructor(protected $baseService: BaseService) {
    this.url = 'cabinet/announcement';
  }

  /**
   *
   * @returns
   */
  getReferencesForCreate() {
    return this.$baseService.get<ReferencesForCreate>(this.url + '/create');
  }

  /**
   *
   * @param categoryId
   * @returns
   */
  getFiltersByCategoryId(categoryId: number) {
    return this.$baseService.get<Filter[]>(
      `${this.url}/category-filter/${categoryId}`
    );
  }

  /**
   *
   * @param categoryId
   * @returns
   */
  getCategoryTypesByCategoryId(categoryId: number) {
    return this.$baseService.get<CategoryType[]>(
      `${this.url}/category-type/${categoryId}`
    );
  }

  /**
   *
   * @param id
   * @returns
   */
  getAdvertisementForEditById(id: number) {
    return this.$baseService.get<AdvertisementEditResponse>(
      `${this.url}/${id}/edit`
    );
  }

  /**
   *
   * @param model
   * @returns
   */
  add(model: AdvertisementRequest): Observable<BaseResponse<any>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.post<any>(this.url, formData);
  }

  /**
   *
   * @param model
   * @returns
   */
  edit(id: number, model: AdvertisementRequest): Observable<BaseResponse<any>> {
    const formData = this.convertModelIntoFormData(model);
    return this.$baseService.put<any>(this.url + '/' + id, formData);
  }

  /**
   *
   * @returns
   */
  getRegions(): Observable<Region[]> {
    return this.$baseService
      .get<Region[]>('region')
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param regionId
   * @returns
   */
  getDistrictsByRegionId(regionId: number): Observable<District[]> {
    return this.$baseService
      .get<District[]>(`district/${regionId}`)
      .pipe(map((result) => result.data));
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

    if (model.created_for_user)
      formData.append('created_for_user', model.created_for_user.toString());

    return formData;
  }
}
