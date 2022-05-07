import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface CategoryResponse extends Id {
  name: NzSafeAny;
  icon: string;
  parent: { id: number }[];
  filter: {
    id: number;
    parameters: { id: number }[];
  }[];
  announcement_type: {
    announcement_type_id: number;
    category_id: number;
    name: string;
  }[];
}
