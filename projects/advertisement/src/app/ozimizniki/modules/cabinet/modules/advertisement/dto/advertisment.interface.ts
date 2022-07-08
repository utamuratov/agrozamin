import { Id, IdName } from 'ngx-az-core';

export interface Advertisement extends Id {
  name: string;
  description: string;
  price: number;
  status: number;
  category_id: number;
  category: IdName;
  file: string;
  favorite_count: number;
  views_count: number;
  views_count_of_phone: number;
  favorite: boolean;
  reject_reason: string;
}
