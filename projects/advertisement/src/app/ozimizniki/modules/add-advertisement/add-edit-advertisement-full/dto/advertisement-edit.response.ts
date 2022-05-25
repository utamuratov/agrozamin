import { AdvertisementRequest } from './advertisement.request';
import { Category } from './category.interface';

export interface AdvertisementEditResponse {
  announcement: AdvertisementRequest;
  categories: Category[];
}
