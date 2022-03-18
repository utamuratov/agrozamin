import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface AccessControl {
  key: string;
  description: NzSafeAny; // {ru: '', uz: ''}
  url?: string;
}
