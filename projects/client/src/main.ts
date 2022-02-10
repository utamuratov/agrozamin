import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { SettingsHelper } from './app/core/helpers/settings.helper';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

SettingsHelper.load()
  .then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((err) => console.error(err));
