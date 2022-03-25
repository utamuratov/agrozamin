import { Id } from '../../../../../shared/models/id.interface';

export interface Project extends Id {
  name: string;
  logo: string;
}
