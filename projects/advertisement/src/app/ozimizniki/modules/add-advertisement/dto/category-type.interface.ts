import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface CategoryType extends Id {
  announcement_type_id: number;
  category_id: number;
  name: string;
}
