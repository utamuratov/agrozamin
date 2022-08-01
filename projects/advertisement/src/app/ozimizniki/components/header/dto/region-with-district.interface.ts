import { IdName } from 'ngx-az-core';

export interface RegionWithDistrict extends IdName {
  districts: IdName[];
}
