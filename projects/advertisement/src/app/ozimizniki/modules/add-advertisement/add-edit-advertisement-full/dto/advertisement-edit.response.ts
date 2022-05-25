import { AdvertisementResponse } from './advertisement.response';
import { Category } from './category.interface';

export interface AdvertisementEditResponse {
  announcement: AdvertisementResponse;
  categories: Category[];
}
