import { AdvertisementStatus } from 'ngx-az-core';
import { Id } from 'ngx-az-core';

export interface AdvertisementGetAll extends Id {
  name: string;
  price: number;
  status: AdvertisementStatus;
}
