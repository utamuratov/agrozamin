import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { GridModel } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { FavouriteService } from 'projects/advertisement/src/app/shared/services/favourite.service';
import { Observable, map } from 'rxjs';
import { Advertisement } from '../../../../advertisement/dto/advertisement.interface';

@Injectable({ providedIn: 'root' })
export class FavouriteAdvertisementResolver
  implements Resolve<GridModel<Advertisement>>
{
  /**
   *
   */
  constructor(private $data: FavouriteService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve():
    | Observable<GridModel<Advertisement>>
    | Promise<GridModel<Advertisement>>
    | GridModel<Advertisement> {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    query.filter = [];
    return this.$data.getGridData(query).pipe(map((result) => result.data));
  }
}
