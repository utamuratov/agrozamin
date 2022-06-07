import { IdName } from '../../../models/id-name.interface';
import { Advertisement } from './advertisement.interface';
import { FileResponse } from './file.response';

export interface AdvertisementResponse
  extends Advertisement<FileResponse, { id: number; username: string } | null> {
  category: IdName;
  id: number;
  created_by: { id: number; username: string };
}