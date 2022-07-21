import { Injectable } from '@angular/core';
import { Advertisement, BaseService, GridService } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementSimilarService extends GridService<Advertisement> {
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'announcement/similar';
  }

  /**
   *
   * @param advertisementId
   * @returns
   */
  getSimilarAdvertisements(advertisementId: number) {
    const query = AdvertisementConstants.DEFAULT_GRID_QUERY;
    return super.getGridData(query, this.url + '/' + advertisementId).pipe(
      map((result) => {
        return result.data.data;
      })
    );
  }
}
