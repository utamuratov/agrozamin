import { BaseModel } from './base-model';
import { Project } from './project.interface';
import { Generic } from 'projects/admin/src/app/shared/models/generic.type';
import { Id } from 'ngx-az-core';

export interface Translation extends Id, BaseModel {
  projects: Project[];
  type: number;
  key: string;
  text: Generic; // DYNAMIC: { "ru": "", "uz_cyrl": "", "uz_latn": "" }
}
