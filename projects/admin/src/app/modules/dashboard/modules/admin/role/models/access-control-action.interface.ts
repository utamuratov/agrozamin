import { Id } from 'projects/admin/src/app/shared/models/id.interface';
import { AccessAction } from './access-action.interface';

export interface AccessControl extends Id {
  description: string;
  access_actions: AccessAction[];
}
