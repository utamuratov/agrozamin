import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import {
  InputTypeForCreator,
  InputTypeForFilter,
} from '../../../enums/input-type.enum';
import { FilterParameter } from './filter-parameter.interface';

export interface Filter {
  filter_id: number;
  type_for_creator: InputTypeForCreator;
  type_for_filter: InputTypeForFilter;
  field_name: string;
  name: string;
  parameters: FilterParameter[];

  // for model
  value: number | NzCheckBoxOptionInterface[] | Date | string | number[];
  invalid: boolean;
}
