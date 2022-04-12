import { Generic } from 'projects/admin/src/app/shared/models/generic.type';
import { Parameter } from './parameter.interface';

export interface FilterRequest {
  type_for_filter: number;
  type_for_creator: number;
  name: Generic;
  field_name: string;
  parameters: Parameter[];
}
