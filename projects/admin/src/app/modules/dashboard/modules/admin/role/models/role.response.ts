import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { KeyDescription } from 'projects/admin/src/app/shared/models/key-descript.interface';
import { Id } from '../../../../../../shared/models/id.interface';
import { AccessControlAction } from './access-control-action.interface';

export interface RoleResponse extends Id, KeyDescription<string, NzSafeAny> {
  access_control_action: AccessControlAction[];
}
