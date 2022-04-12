import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface CategoryRequest {
  name: NzSafeAny;
  icon: File;
  categoryId?: number;
}
