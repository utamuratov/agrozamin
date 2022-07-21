import { IdName } from 'ngx-az-core';

export interface CategoryWithChild extends IdName {
  icon: string;
  child?: CategoryWithChild[];
}
