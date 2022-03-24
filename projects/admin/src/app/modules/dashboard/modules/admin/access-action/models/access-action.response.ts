import { Id } from '../../../translate/models/id.interface';
import { AccessAction } from './access-action.interface';

export interface AccessActionResponse extends AccessAction, Id {}
