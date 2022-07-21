import { Category } from './category.interface';
import { SellerInfo } from './seller-info.interface';

export interface SellerDetails {
  user: SellerInfo;
  categories: Category[];
}
