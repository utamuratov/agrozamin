import { IdName } from './id-name.interface';
import { Id } from './id.interface';
import { Person } from './person.interface';
import { Location } from '../shared/add-edit-advertisement-shared/dto/location.interface';

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
  location: Location;
}
