import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface CategoryEditingData extends Id {
  name: NzSafeAny;
  icon?: File;
  status?: boolean;
  filters: string[];
  parent_categories: string[];
}
