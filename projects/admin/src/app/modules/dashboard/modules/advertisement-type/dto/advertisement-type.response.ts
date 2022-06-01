import { Id } from 'ngx-az-core';

export interface AdvertisementTypeResponse extends Id {
  name: { [key: string]: string };
}
