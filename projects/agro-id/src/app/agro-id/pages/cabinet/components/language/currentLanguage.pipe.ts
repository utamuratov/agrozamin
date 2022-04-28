import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'ngx-az-core';

@Pipe({
  name: 'currentLanguage',
})
export class CurrentLanguagePipe implements PipeTransform {
  transform(code: string, languages: Language[] | null): Language | undefined {
    if (!languages) {
      return undefined;
    }

    const currentLanguage = languages.find((language) => language.code == code);
    return currentLanguage;
  }
}
