import { Id } from 'projects/admin/src/app/shared/models/id.interface';
import { FilterRequest } from './filter.request';

export interface FilterResponse extends Id, FilterRequest {}
