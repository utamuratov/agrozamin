import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AddAdvertisementService,
  BaseService,
  CategoryType,
  District,
  Region,
} from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { UserListItem } from '../dto/user-list-item.interface';

@Injectable({ providedIn: 'root' })
export class AddEditAdvertismentService extends AddAdvertisementService {
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/announcement';
  }

  /**
   *
   * @param categoryId
   * @returns
   */
  override getCategoryTypesByCategoryId(categoryId: number) {
    return this.$baseService.get<CategoryType[]>(
      `${this.url}/type/${categoryId}`
    );
  }

  /**
   *
   * @returns
   */
  override getRegions(): Observable<Region[]> {
    return this.$baseService
      .get<Region[]>('admin/region/list')
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param regionId
   * @returns
   */
  override getDistrictsByRegionId(regionId: number): Observable<District[]> {
    return this.$baseService
      .get<District[]>(`admin/district/list/${regionId}`)
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param searchText
   * @returns
   */
  getUsersBySearchText(searchText: string) {
    return this.$baseService.get<UserListItem[]>(
      'admin/user/list',
      new HttpParams().set('search', searchText)
    );
  }
}
