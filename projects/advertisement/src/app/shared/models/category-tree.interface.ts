import { Id } from 'ngx-az-core';

export interface CategoryTree extends Id {
  name: string;
  icon: string | null | undefined;
  child_categories?: CategoryTree[];
  // for model
  sequence: string;
}
