import { Id, IdName } from 'ngx-az-core';

export interface Category extends Id {
  name: string;
  icon: string | null;
  child_categories?: IdName[];
}
