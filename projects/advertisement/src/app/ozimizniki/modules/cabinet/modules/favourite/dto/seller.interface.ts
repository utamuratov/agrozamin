import { Id } from 'ngx-az-core';

export interface Seller extends Id {
  announcements_count: number;
  created_at: string;
  favorite: boolean;
  full_name: string;
  last_active_time: Date;
  online: boolean;
  photo: string;
}
