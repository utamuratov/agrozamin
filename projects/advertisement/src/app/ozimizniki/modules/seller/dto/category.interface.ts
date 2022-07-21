import { Id } from 'ngx-az-core';

export interface Category extends Id {
  name: string;
  icon: string | null | undefined;
  child_categories?: Category[];
}
