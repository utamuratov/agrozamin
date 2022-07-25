import { Id } from 'ngx-az-core';

export interface SavedFilter extends Id {
  notification: boolean;
  categories: Category[];
  parameters: Parameter[];
  created_at: Date;
  new_announcements: number;
}

export interface Category extends Id {
  category: string;
  saved_filter_id: number;
}

interface Parameter {
  filter: string;
  filter_id: number;
  parameter: string;
  parameter_id: number;
}
