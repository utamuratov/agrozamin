import { Id, IdName } from 'ngx-az-core';

export interface CategoryForBreadcrumb extends Id {
  category_id: number | null;
  name: string;
  neighbor_categories: NeighBorCategory[];
  // for modal
  sequence: string;
}

export interface NeighBorCategory extends IdName {
  // for modal
  sequence: string;
}
