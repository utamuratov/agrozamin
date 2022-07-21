import { Id } from 'ngx-az-core';
import { AccessControlAction } from './access-control-action.interface';
import { AccessControl } from './access-control.interface';

export interface AccessControlResponse<T = AccessControlAction>
  extends AccessControl<T>,
    Id {}
