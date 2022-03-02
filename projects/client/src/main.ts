import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';
import { SettingsHelper } from 'ngx-az-core';

if (environment.production) {
  enableProdMode();
}

SettingsHelper.load()
  .then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((err) => console.error(err));
