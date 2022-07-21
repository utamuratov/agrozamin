import { Injectable } from '@angular/core';
import { Advertisement, BaseService, GridService } from 'ngx-az-core';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementPopularService extends GridService<Advertisement> {
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'announcement/popular';
  }
}
