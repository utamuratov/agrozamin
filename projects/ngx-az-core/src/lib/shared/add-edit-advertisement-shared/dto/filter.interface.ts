import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import {
  InputTypeForCreator,
  InputTypeForFilter,
} from '../../../enums/input-type.enum';

export interface Filter {
  filter_id: number;
  type_for_creator: InputTypeForCreator;
  type_for_filter: InputTypeForFilter;
  field_name: string;
  name: string;
  parameters: {
    category_filter_id: number;
    filter_parameter_id: number;
    label: string;

    // for model
    visiblePopover: boolean;
  }[];

  // for model
  value: number | NzCheckBoxOptionInterface[] | Date | string;
  invalid: boolean;
}
