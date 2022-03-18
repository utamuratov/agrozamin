import { FormGroup } from '@angular/forms';

/**
 * Gets domain of the url
 * @param url Incoming url address
 */
export const getDomain = (url: string) => new URL(url).host;

/**
 *
 * Checks for validation to the reactive form
 * @param form Forom needs validation
 */
export function markAllAsDirty(form: FormGroup) {
  Object.values(form.controls).forEach((control) => {
    if (control.invalid) {
      if (control instanceof FormGroup) {
        Object.values(control.controls).forEach((subControl) => {
          if (subControl.invalid) {
            subControl.markAsDirty();
            subControl.updateValueAndValidity({ onlySelf: true });
          }
        });
      } else {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    }
  });
}
