import { Id } from 'ngx-az-core';
import { BusinessCard } from './business-card.interface';

export interface BusinessCardResponse extends Id, BusinessCard {
  thumbnail: string;
  // Just  for ui
  isVisiblePopover?: boolean;
}
