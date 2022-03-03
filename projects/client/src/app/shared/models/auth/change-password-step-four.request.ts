import { Login } from './login';

export interface ChangePasswordStepFourRequest extends Login {
  password: string;
}
