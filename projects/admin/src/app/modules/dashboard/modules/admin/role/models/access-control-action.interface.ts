import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface AccessControlAction extends Id {
  access_action_id: number;
  access_control_id: number;
  action: string;
  control: string;
}
