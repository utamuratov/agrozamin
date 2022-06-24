import { Id, IdName } from 'ngx-az-core';
import { Person } from './person.interface';

export interface Advertisement extends Id {
  address: string;
  category: IdName;
  category_id: number;
  favorite: boolean;
  file: string;
  name: string;
  price: number;
  status: number;
  description: string;
  contact: Person;
  created_by: Person;
}
