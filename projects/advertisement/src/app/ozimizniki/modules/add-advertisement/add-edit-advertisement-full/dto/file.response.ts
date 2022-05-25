import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface FileResponse extends Id {
  file: string;
}
