import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';

export interface CategoryWithChild extends IdName {
  icon: string;
  child?: CategoryWithChild[];
}
