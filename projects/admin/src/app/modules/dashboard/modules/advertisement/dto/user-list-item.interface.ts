import { Id } from 'ngx-az-core';

export interface UserListItem extends Id {
  login: string;
  phone: number;
  username: string;
}
