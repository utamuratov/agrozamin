import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface Advertisement extends Id {
  name: string;
  description: string;
  price: number;
  status: number;
  category_id: number;
  category: IdName;
  file: {
    id: number;
    file: string;
  };
}
