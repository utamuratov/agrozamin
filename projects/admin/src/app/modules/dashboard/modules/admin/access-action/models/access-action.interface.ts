import { Generic } from 'projects/admin/src/app/shared/models/generic.type';

export interface AccessAction {
  key: string;
  description: Generic; // DYNAMIC: { "ru": "", "uz_cyrl": "", "uz_latn": "" }
}
