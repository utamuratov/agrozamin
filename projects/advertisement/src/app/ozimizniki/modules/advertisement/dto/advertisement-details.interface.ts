import { FileResponse, Id, Location } from 'ngx-az-core';
import { Advertisement } from './advertisement.interface';
import { CharacteristicsDetail } from './characteristics-detail.interface';

export interface AdvertisementDetails extends Id, Advertisement {
  deal: false;
  created_for_user: null;
  video_url: string;
  district: string;
  region: string;
  files: FileResponse[];
  characteristics_detail: CharacteristicsDetail[];
  user_is_online: boolean;
  location: Location;

  // for model
  carauselData: { type: 'video' | 'img'; src: string }[];
}
