import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'ngx-az-core';
import { RegionRequest } from '../../../dto/region.request';
import { RegionResponse } from '../../../dto/region.response';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  /**
   * 
   */
  readonly baseUrl = 'http://localhost:4201/api/v1/admin/region';

  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getAll() {
    return this.http.get<BaseResponse<RegionResponse[]>>(this.baseUrl);
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
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

  /**
   * 
   * @param id 
   * @param region 
   * @returns 
   */
  update(id: number, region: RegionRequest) {
    return this.http.put<BaseResponse<boolean>>(`${this.baseUrl}/${id}`, region);
  }
}
