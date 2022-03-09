import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { jwtOptionsFactory } from './helpers/jwt-options.factory';
import { createTranslateLoader } from './helpers/http-loader-factory';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DITokens } from './config/di-tokens';
import { SettingsHelper } from './helpers/settings.helper';
import { GlobalErrorHandler } from './helpers/global-error-handler';
import { HandleErrorInterceptor } from './interceptors/handle.error.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { NgxsModule } from '@ngxs/store';
import { CoreStateList } from './shared/store/core-state-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

    /**
     * NGX-TRANSLATE
     */
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

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

    /** NgxsModule for store usage, StateList is for states which ngxs store serves */
    NgxsModule.forRoot(CoreStateList, {}),
  ],
  exports: [TranslateModule, CommonModule],
  providers: [
    {
      provide: DITokens.ENDPOINT_URL,
      useFactory: () => SettingsHelper.settings.endpoint,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
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
  ],
})
export class NgxAzCoreModule {}
