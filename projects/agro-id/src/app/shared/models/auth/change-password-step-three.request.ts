import { Login } from './login';

export interface ChangePasswordStepThreeRequest extends Login {
  secure_code: string;
}
