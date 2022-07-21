import { Id } from './id.interface';

export interface Person extends Id {
  full_name: string;
  phone: number;
}
