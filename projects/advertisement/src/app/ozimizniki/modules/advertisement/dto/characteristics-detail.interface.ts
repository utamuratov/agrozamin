import { Id } from 'ngx-az-core';

export interface CharacteristicsDetail extends Id {
  value: string | number | null;
  announcement_id: number;
  parameter: string;
  filter: string;
}
