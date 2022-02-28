import { Email } from "./email";
import { Phone } from "./phone";

export interface RestoreLoginStepOneRequest extends Email, Phone {
}
