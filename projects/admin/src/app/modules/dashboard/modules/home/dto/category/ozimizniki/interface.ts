import { Translate } from '../../translate.interface';

export interface CategoryResponse {
  success: boolean;
  data: Category[];
}

export interface Category {
  announcement_type: AnnouncementType[];
  filter: CategoryFilter[];
  icon: string;
  id: number;
  name: Translate;
  parent: ParentCategory[];
  project_id: number;
}

export interface AnnouncementType {
  announcement_type_id: number;
  category_id: number;
  name: string;
}

export interface CategoryFilter {
  category_filter_id: number;
  category_id: number;
  id: number;
  name: string;
  parameters: FilterParams[];
}

export interface FilterParams {
  category_filter_id: number;
  filter_parameter_id: number;
  id: number;
}

export interface ParentCategory {
  child_id: number;
  id: number;
  name: string;
}
