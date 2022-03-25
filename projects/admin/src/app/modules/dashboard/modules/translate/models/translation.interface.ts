import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseModel } from './base-model';
import { Id } from '../../../../../shared/models/id.interface';
import { Project } from './project.interface';

export interface Translation extends Id, BaseModel {
  projects: Project[];
  type: number;
  key: string;
  text: NzSafeAny; // DYNAMIC: { "ru": "", "uz_cyrl": "", "uz_latn": "" }
}
