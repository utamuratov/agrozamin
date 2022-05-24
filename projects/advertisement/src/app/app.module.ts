import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InjectorHelper, NgxAzCoreModule } from 'ngx-az-core';
import { RootLayoutComponent } from './ozimizniki/components/root-layout/root-layout.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(ru);
const providers = [{ provide: NZ_I18N, useValue: ru_RU }];

const mapConfig: YaConfig = {
  apikey: 'a54566ed-23f8-4e22-b3ea-0eaf50216fb5',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [AppComponent, RootLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /**
     * CUSTOM MODULES
     */
    NgxAzCoreModule,

    /**
     * NPM MODULES
     */
    AngularYandexMapsModule.forRoot(mapConfig),
    NgxMaskModule.forRoot(),

    BrowserAnimationsModule,
  ],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorHelper.injector = this.injector;
  }
}

@NgModule({})
export class AdvertisementRoutingSharedModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers,
    };
  }
}
