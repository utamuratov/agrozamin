import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface UserListItem extends Id {
  login: string;
  phone: number;
  username: string;
}
