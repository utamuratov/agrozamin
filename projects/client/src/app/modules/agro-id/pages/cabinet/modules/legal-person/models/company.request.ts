import { Company } from './company.interface';

export interface CompanyRequest extends Company {
  photo: File;
}
