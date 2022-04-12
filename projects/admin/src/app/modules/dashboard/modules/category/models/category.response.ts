import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface CategoryResponse extends Id {
  name: NzSafeAny;
  icon: string;
  subCategories: CategoryResponse[];
  parentIds?: number[];
}
