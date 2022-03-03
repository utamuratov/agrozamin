import {
  AbstractControl,
  AsyncValidatorFn,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

export class ValidationHelper {
  /**
   *
   * @param control
   * @returns
   */
  static numberValidator(control: AbstractControl): ValidationErrors | null {
    const isNumber = /^[0-9]+$/.test(control.value);
    return !isNumber
      ? { number: { actualValue: control.value, pattern: '^[0-9]+$' } }
      : null;
  }

  /**
   *
   * @param control
   * @returns
   */
  static loginPatternValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const validLogin = /^[^`~!@#$%^&*()={};:'"|\\?[\]/]+$/.test(control.value);
    return !validLogin
      ? {
          login: {
            actualValue: control.value,
            pattern: '[]`~!@#$%^&*()={};:\'"|\\?/',
          },
        }
      : null;
  }

  /**
   *
   * Unicode letters
   */
  static unicodeLettersValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const isText = /^[\p{Letter}]+$/u.test(control.value);

    return !isText
      ? { text: { actualValue: control.value, pattern: '^[p{Letter}]+$' } }
      : null;
  }

  /**
   *
   * @param form
   * @returns
   */
  static mustMatchPAsswordAsyncValidator(
    form: FormGroup,
    passwordControlName: string
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value !== form.controls[passwordControlName].value) {
        return of({ mustMatch: true });
      } else {
        return of(null);
      }
    };
  }

  /**
   *
   * @param controlName
   * @param matchingControlName
   * @returns
   */
  static mustMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  /**
   *
   * @param control
   * @returns
   */
  static strongPasswordValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const isMoreThan8Characters = /^.{8,}$/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && isMoreThan8Characters;
    if (!valid) {
      return { strongPassword: { actualValue: control.value } };
    }
    return null;
  }
}
