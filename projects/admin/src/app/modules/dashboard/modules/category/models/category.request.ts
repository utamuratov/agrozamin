import { Generic } from 'projects/admin/src/app/shared/models/generic.type';

export interface CategoryRequest {
  name: Generic;
  icon: File;
  status: boolean;
  filters: {
    id: number;
    parameters: number[];
  }[];
  parent_categories: number[];
}
