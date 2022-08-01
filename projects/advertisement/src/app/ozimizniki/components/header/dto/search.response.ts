import { IdName } from 'ngx-az-core';

export interface SearchResponse {
  announcements: Announcement[];
  categories: Category[];
  total: number;
}

export interface Announcement extends IdName {
  category: IdName;
}

export interface Category extends IdName {
  parents: CategoryParent[];
}

export interface CategoryParent {
  category_id: number;
  name: string;
}
