import { Id } from 'ngx-az-core';
import { Translate } from '../translate.interface';
import { Project } from './projects.interface';

export interface TranslateList extends Id {
  key: string;
  projects: Project[];
  text: Translate;
  type: number;
}
