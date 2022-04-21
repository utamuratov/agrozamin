import { FormGroup } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Constants } from '../config/constants';

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
          if (
            subControl.invalid &&
            !control.hasError(Constants.ERROR_MESSAGE_FROM_SERVER)
          ) {
            subControl.markAsDirty();
            subControl.updateValueAndValidity({ onlySelf: true });
          }
        });
      } else {
        if (!control.hasError(Constants.ERROR_MESSAGE_FROM_SERVER)) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      }
    }
  });
}

export function obj2FormData(obj: NzSafeAny): FormData {
  const formData: FormData = new FormData();
  createFormData(obj, '', formData);

  return formData;
}

function createFormData(obj: NzSafeAny, subKeyStr = '', formData: FormData) {
  for (const i in obj) {
    const value = obj[i];
    if (value instanceof File) {
      formData.append(i, value, value?.name);
      continue;
    }
    const subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i;

    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      value instanceof Date ||
      typeof value === 'boolean'
    ) {
      formData.append(subKeyStrTrans, value.toString());
    } else if (typeof value === 'object') {
      createFormData(value, subKeyStrTrans, formData);
    }
  }
}
