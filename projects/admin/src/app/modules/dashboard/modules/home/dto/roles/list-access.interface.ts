import { Id } from 'ngx-az-core';

export interface Access extends Id {
  description: string;
  key: string;
}
