import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneAsterisk',
})
export class PhoneAsteriskPipe implements PipeTransform {
  transform(value?: string): any {
    if (!value) {
      return '';
    }

    return `+${value.slice(0, 3)}******${value.slice(8)}`;
  }
}
