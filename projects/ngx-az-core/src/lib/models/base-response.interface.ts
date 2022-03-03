import { ErrorItem } from './error-item.interface';

export interface BaseResponse<T = unknown> {
  success: boolean;
  data: T;
  error: ErrorItem[];
}
