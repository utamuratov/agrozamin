import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'ngx-az-core';

@Pipe({
  name: 'currentLanguage',
})
export class CurrentLanguagePipe implements PipeTransform {
  transform(
    value: Language[] | null,
    code?: string | null
  ): Language | undefined {
    if (Array.isArray(value)) {
      return value.find((language) => language.code === code);
    }
    return undefined;
  }
}
