import { Id } from 'ngx-az-core';
import { AccessAction } from './access-action.interface';

export interface AccessControl extends Id {
  description: string;
  access_actions: AccessAction[];
}
