import { Id } from 'ngx-az-core';
import { AccessAction } from './access-action.interface';

export interface AccessActionResponse extends AccessAction, Id {}
