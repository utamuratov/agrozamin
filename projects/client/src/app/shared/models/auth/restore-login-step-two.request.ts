import { Email } from './email';
import { Phone } from './phone';

export interface RestoreLoginStepTwoRequest extends Email, Phone {
  secure_code?: string;
}
