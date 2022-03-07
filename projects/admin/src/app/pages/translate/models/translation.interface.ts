import { KeyValue } from '@angular/common';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { BaseModel } from './base-model';
import { Id } from './id.interface';
import { Project } from './project.interface';

export interface Translation extends Id, BaseModel {
  projects: Project[];
  type: number;
  key: string;
  text: any; // DYNAMIC: { "ru": "", "uz_cyrl": "", "uz_latn": "" }
}

export interface MyTranslation extends Translation {
  textKeyValue: KeyValue<string, string>[];
  transferItems: TransferItem[];
}
