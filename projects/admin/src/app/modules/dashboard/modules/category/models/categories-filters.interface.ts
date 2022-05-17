import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { CategoryWithChild } from './category-with-child.interface';
import { Filter } from './filter.model';

export interface CategoriesFilters {
  categories: CategoryWithChild[];
  filters: Filter[];
  announcements: IdName[];
}
