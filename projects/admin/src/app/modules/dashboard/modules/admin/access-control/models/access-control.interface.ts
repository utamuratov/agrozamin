import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface AccessControl<TAction = number> {
  key: string;
  description: NzSafeAny; // {ru: '', uz: ''}
  url?: string;
  actions: TAction[];
}
