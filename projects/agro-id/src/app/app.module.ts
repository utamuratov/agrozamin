import { Injector, ModuleWithProviders, NgModule } from '@angular/core';

import { HammerModule } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';

/* NG-ZORRO-MODULES */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { LayoutComponent } from './components/layout/layout.component';
import { NgxMaskModule } from 'ngx-mask';
import { CookieService } from 'ngx-cookie-service';
import { InjectorHelper, NgxAzCoreModule } from 'ngx-az-core';
import { MyHammerConfig } from './core/configs/my-hammer.config';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(ru);

const providers = [
  { provide: NZ_I18N, useValue: ru_RU },
  CookieService,
  // {
  //   provide: HAMMER_GESTURE_CONFIG,
  //   useClass: MyHammerConfig,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent,

    LayoutComponent,
    InternalServerErrorComponent,
    NotFoundPageComponent,
  ],
  imports: [
    AppRoutingModule,

    /**
     * CUSTOM MODULES
     */
    NgxAzCoreModule,

    /**
     * NPM MODULES
     */
    NgxMaskModule.forRoot(),
    HammerModule, // ngx-image-cropper needs

    /* NG-ZORRO-MODULES */
    NzButtonModule,
    NzSelectModule,
    NzBreadCrumbModule,
    NzSpinModule,
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
export class AgroIdRoutingSharedModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers,
    };
  }
}
