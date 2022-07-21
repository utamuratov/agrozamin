import { Id } from 'ngx-az-core';
import { FilterRequest } from './filter.request';

export interface FilterResponse extends Id, FilterRequest {}
