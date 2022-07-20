import { Id } from 'ngx-az-core';

export interface SupportChatResponse extends Id {
  full_name: string;
  user_registration_date: Date;
  message_count: number;
}
