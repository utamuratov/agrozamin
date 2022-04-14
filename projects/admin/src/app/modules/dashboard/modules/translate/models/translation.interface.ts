import { BaseModel } from './base-model';
import { Id } from '../../../../../shared/models/id.interface';
import { Project } from './project.interface';
import { Generic } from 'projects/admin/src/app/shared/models/generic.type';

export interface Translation extends Id, BaseModel {
  projects: Project[];
  type: number;
  key: string;
  text: Generic; // DYNAMIC: { "ru": "", "uz_cyrl": "", "uz_latn": "" }
}
