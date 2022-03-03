import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsHelper } from './settings.helper';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, SettingsHelper.settings.endpoint + 'translate/', '');
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
