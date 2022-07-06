import { Id } from 'ngx-az-core';

export interface SellerInfo extends Id {
  full_name: string;
  photo: string;
  created_at: string;
  online: boolean;
  favorite: boolean;
}
