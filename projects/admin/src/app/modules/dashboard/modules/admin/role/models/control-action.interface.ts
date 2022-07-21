import { Id } from 'ngx-az-core';
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
