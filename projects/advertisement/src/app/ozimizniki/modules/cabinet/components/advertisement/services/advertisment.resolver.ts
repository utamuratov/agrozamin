import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { GridModel } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { Observable, map } from 'rxjs';
import { Advertisement } from '../dto/advertisment.interface';
import { AdvertisementService } from './advertisment.service';

@Injectable({ providedIn: 'root' })
export class AdvertisementResolver
  implements Resolve<GridModel<Advertisement>>
{
  /**
   *
   */
  constructor(private $data: AdvertisementService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<GridModel<Advertisement>>
    | Promise<GridModel<Advertisement>>
    | GridModel<Advertisement> {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    query.filter = [
      { key: 'status', value: [String(route.params['status'] || '')] },
    ];
    return this.$data.getGridData(query).pipe(map((result) => result.data));
  }
}
