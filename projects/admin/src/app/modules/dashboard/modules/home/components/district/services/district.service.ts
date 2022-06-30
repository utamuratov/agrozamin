import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'ngx-az-core';
import { DistrictResponse } from '../../../dto/district.response';
import { DistrictResponseRegion } from '../../../dto/district.response-region';
import { RegionRequest } from '../../../dto/region.request';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  /**
   *
   */
  readonly baseUrl = 'http://localhost:4201/api/v1/admin/district';

  /**
   *
   */
  readonly regionList = 'http://localhost:4201/api/v1/admin/region/list';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getRegionList() {
    return this.http.get<BaseResponse<DistrictResponseRegion[]>>(
      this.regionList
    );
  }

  /**
   *
   * @returns
   */
  getAll() {
    return this.http.get<BaseResponse<DistrictResponse[]>>(this.baseUrl);
  }

  /**
   *
   * @param region
   * @returns
   */
  add(region: RegionRequest) {
    return this.http.post<BaseResponse<boolean>>(this.baseUrl, region);
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   *
   * @param id
   * @param region
   * @returns
   */
  update(id: number, region: RegionRequest) {
    return this.http.put<BaseResponse<boolean>>(
      `${this.baseUrl}/${id}`,
      region
    );
  }
}
