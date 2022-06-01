import { Id } from '../../../models/id.interface';

export interface Category extends Id {
  name: string;
  child_categories: Category[];
}
