import { Id } from '../../../../../../shared/models/id.interface';
import { AccessControlAction } from './access-control-action.interface';
import { AccessControl } from './access-control.interface';

export interface AccessControlResponse<T = AccessControlAction>
  extends AccessControl<T>,
    Id {}
