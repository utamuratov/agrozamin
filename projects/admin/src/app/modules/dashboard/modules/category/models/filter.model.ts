import { IdName } from 'ngx-az-core';
import { ParameterModel } from './parameter.model';

export interface Filter extends IdName {
  parameters: ParameterModel[];
}
