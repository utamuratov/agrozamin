import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Id } from 'ngx-az-core';
import { KeyDescription } from 'projects/admin/src/app/shared/models/key-descript.interface';

export interface AddEditRole<T = number>
  extends Id,
    KeyDescription<string, NzSafeAny> {
  access: T[];
}
