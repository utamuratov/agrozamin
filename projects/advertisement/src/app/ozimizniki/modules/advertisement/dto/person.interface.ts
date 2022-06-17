import { Id } from 'ngx-az-core';

export interface Person extends Id {
  full_name: string;
  phone: number;
}
