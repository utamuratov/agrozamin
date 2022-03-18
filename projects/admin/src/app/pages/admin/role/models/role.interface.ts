import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Access } from './access.interface.ts';

export interface Role {
  key: string;
  description: NzSafeAny;
  access: Access[];
}
