import { AdminUser } from './admin-user.interface';

export interface AdminUserBody extends AdminUser {
  id?: number;
  role: number;
}
