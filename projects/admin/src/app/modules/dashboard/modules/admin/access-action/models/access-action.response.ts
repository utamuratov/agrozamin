import { Id } from '../../../../../../shared/models/id.interface';
import { AccessAction } from './access-action.interface';

export interface AccessActionResponse extends AccessAction, Id {}
