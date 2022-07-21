import { Login } from './login';

export type ContactType = 'phone' | 'email';

export interface ChangePasswordStepTwoRequest extends Login {
  contact_type: ContactType;
}

