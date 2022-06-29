import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { Advertisement } from '../dto/advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementPopularService extends GridService<Advertisement> {
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'announcement/popular';
  }
}
