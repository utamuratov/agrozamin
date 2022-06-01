import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Id } from 'ngx-az-core';

export interface CategoryEditingData extends Id {
  name: NzSafeAny;
  icon?: File;
  status?: boolean;
  filters: string[];
  parent_categories: string[];
  announcement_types: number[];
}
