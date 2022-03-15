import { Id } from '../../../translate/models/id.interface';

export interface AccessActionResponse extends Id {
  key: string;
  description: string;
}
