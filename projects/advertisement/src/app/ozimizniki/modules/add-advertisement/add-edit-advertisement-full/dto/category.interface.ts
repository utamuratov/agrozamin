import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface Category extends Id {
  name: string;
  child_categories: Category[];
}
