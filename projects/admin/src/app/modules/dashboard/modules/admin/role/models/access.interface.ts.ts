import { Id } from 'ngx-az-core';
import { KeyDescription } from 'projects/admin/src/app/shared/models/key-descript.interface';

export interface Access extends Id, KeyDescription {}
