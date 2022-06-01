import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { Advertisement } from './advertisement.interface';
import { FileResponse } from './file.response';

export interface AdvertisementResponse extends Advertisement<FileResponse> {
  category: IdName;
  id: number;
  created_by: { id: number; username: string };
}
