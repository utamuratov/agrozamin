import { Id } from 'projects/admin/src/app/shared/models/id.interface';
import { Company } from './company.interface';

export interface CompanyResponse extends Id, Company {
  photo: string;
  // Just  for ui
  isVisiblePopover?: boolean;
}
