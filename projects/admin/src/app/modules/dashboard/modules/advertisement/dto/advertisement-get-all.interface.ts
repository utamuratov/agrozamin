import { AdvertisementStatus } from 'ngx-az-core';
import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface AdvertisementGetAll extends Id {
  name: string;
  price: number;
  status: AdvertisementStatus;
}
