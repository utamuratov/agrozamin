import { HomeComponent } from './pages/home/home.component';
import { ErrorHandler, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* NG-ZORRO-MODULES */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { InjectorHelper } from './core/helpers/injector.helper';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from './core/helpers/http-loader-factory';
import { DITokens } from './core/config/di-tokens';
import { SettingsHelper } from './core/helpers/settings.helper';
import { GlobalErrorHandler } from './core/helpers/global-error-handler';
import { NgxMaskModule } from 'ngx-mask';
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
import { jwtOptionsFactory } from './core/helpers/jwt-options.factory';
import { CookieService } from 'ngx-cookie-service';
import { HandleErrorInterceptor } from './core/interceptors/handle.error.interceptor';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    BreadcrumbComponent,
  ],
  imports: [
    // CORE MODULES
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgxMaskModule.forRoot(),

    /**
     * Module to support JWT Authentication.
     * jwtOptionsProvider is for settings
     */
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        // deps: [Store], // send STORE as parameter
      },
    }),

    //
    AppRoutingModule,
    FormsModule,

    /* NG-ZORRO-MODULES */
    NzButtonModule,
    NzSelectModule,
    NzBreadCrumbModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: DITokens.ENDPOINT_URL,
      useFactory: () => SettingsHelper.settings.endpoint,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorHelper.injector = this.injector;
  }
}
