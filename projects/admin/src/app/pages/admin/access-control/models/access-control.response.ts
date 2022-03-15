import { Id } from '../../../translate/models/id.interface';
import { AccessControl } from './access-control.interface';

export interface AccessControlResponse extends AccessControl, Id {}
