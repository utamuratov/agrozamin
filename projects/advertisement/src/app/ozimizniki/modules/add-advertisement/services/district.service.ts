import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { District } from '../dto/district.interface';

@Injectable()
export class DistrictService {
  constructor(private $base: BaseService) {}

  getDistrictsByRegionId(regionId: number): Observable<District[]> {
    return this.$base
      .get<District[]>(`district/${regionId}`)
      .pipe(map((result) => result.data));
  }
}
