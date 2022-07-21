import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { KeyDescription } from 'projects/admin/src/app/shared/models/key-descript.interface';
import { Id } from 'ngx-az-core';
import { AccessControl } from './access-control-action.interface';

export interface RoleResponse extends Id, KeyDescription<string, NzSafeAny> {
  access_controls: AccessControl[];
}
