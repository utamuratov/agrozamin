import { Id } from 'ngx-az-core';
import { Company } from './company.interface';

export interface CompanyResponse extends Id, Company {
  photo: string;
  // Just  for ui
  isVisiblePopover?: boolean;
}
