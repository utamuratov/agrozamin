import { Id } from '../../../models/id.interface';

export interface FileResponse extends Id {
  file: string;
}
