import { Translate } from '../translate.interface';

export interface RequestRole {
  key: string;
  description: Translate;
  access: number[];
}
