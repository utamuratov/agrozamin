import { BusinessCard } from './business-card.interface';

export interface BusinessCardRequest extends BusinessCard {
  photo: File;
}
