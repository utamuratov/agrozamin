import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GridModel } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { Observable, map } from 'rxjs';
import { SavedFilter } from '../dto/saved-filter.interface';
import { FilterService } from './filter.service';

@Injectable({ providedIn: 'root' })
export class FavouriteFilterResolver
  implements Resolve<GridModel<SavedFilter>>
{
  /**
   *
   */
  constructor(private $data: FilterService) {}

  /**
   *
   * @param route
   * @returns
   */
  resolve():
    | Observable<GridModel<SavedFilter>>
    | Promise<GridModel<SavedFilter>>
    | GridModel<SavedFilter> {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    query.filter = [];
    return this.$data.getGridData(query).pipe(map((result) => result.data));
  }
}
