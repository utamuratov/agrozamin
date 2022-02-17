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
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  });
}
