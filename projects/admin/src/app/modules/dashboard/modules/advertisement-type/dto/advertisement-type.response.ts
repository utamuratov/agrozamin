import { Id } from 'projects/admin/src/app/shared/models/id.interface';

export interface AdvertisementTypeResponse extends Id {
  name: { [key: string]: string };
}
