import { Generic } from 'projects/admin/src/app/shared/models/generic.type';

export interface CategoryRequest {
  name: Generic;
  icon: File;
  status: boolean;
  project_id: number;
  filters: {
    id: number;
    parameters: number[];
  }[];
  parent_categories: number[];
  announcement_types: number[];
}
