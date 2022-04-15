import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { ParameterModel } from './parameter.model';

export interface Filter extends IdName {
  parameters: ParameterModel[];
}
