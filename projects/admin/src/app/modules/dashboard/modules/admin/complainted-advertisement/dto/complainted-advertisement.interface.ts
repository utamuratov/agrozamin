import { Id } from 'ngx-az-core';

export interface ComplaintedAdvertisement extends Id {
  name: string;
  price: number;
  status: number;
  comment: string;
  announcement_category_id: number;
  complaint_content: string;
}
