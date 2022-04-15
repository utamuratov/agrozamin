import { Email } from './email';
import { Phone } from './phone';

export interface RestoreLoginStepOneResponse extends Email, Phone {}
