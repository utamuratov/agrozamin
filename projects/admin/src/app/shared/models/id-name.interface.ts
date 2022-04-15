import { Id } from './id.interface';

export interface IdName<T = string> extends Id {
  name: T;
}
