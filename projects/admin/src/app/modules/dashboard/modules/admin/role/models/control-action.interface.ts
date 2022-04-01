import { Id } from 'projects/admin/src/app/shared/models/id.interface';
import { Access } from './access.interface.ts';

export interface ControlAction extends Id {
  /**
   *
   */
  key: string;

  /**
   *
   */
  description: string;

  /**
   *
   */
  access: Access[];
}
