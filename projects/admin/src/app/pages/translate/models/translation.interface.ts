import { BaseModel } from './base-model';
import { Id } from './id.interface';

export interface Translation extends Id, BaseModel {
  category: number;
  key: string;
  text: any; // DYNAMIC: { "ru": "", "uz_cyrl": "", "uz_latn": "" }
}
