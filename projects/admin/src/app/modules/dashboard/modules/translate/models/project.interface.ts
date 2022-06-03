import { Id } from 'ngx-az-core';

export interface Project extends Id {
  name: string;
  logo: string;
}
