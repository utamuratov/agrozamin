import { UserStatus } from 'projects/admin/src/app/core/enums/user-status.enum';
import { Id } from 'projects/admin/src/app/shared/models/id.interface';
import { AdminUser } from './admin-user.interface';
import { Moderator } from './moderator.interface';

export interface AdminUserResponse extends Id, AdminUser {
  s_name?: string;
  last_active_time?: Date;
  status: UserStatus;
  role?: { id: number; description: string };
  blocked: boolean;
  description: string;
  moderator: Moderator;

  // for ui
  isActive: boolean;
}
