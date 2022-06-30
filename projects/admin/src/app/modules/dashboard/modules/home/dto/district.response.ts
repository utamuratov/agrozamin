import { Id } from 'ngx-az-core';
import { DistrictResponseRegion } from './district.response-region';
import { Translate } from './translate.interface';

export interface DistrictResponse extends Id {
  name: Translate;
  region_id: number;
  region: DistrictResponseRegion;
}
