import { Injectable } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { Region } from '../dto/region.interface';

@Injectable()
export class RegionService {
  constructor(private $base: BaseService) {}

  getRegions(): Observable<Region[]> {
    return this.$base
      .get<Region[]>('region')
      .pipe(map((result) => result.data));
  }
}
