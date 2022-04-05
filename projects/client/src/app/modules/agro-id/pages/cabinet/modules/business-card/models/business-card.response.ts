import { Id } from 'projects/admin/src/app/shared/models/id.interface';
import { BusinessCard } from './business-card.interface';

export interface BusinessCardResponse extends Id, BusinessCard {
  thumbnail: string;
  // Just  for ui
  isVisiblePopover?: boolean;
}
