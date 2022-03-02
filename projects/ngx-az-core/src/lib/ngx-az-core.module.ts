import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { jwtOptionsFactory } from './helpers/jwt-options.factory';
import { createTranslateLoader } from './helpers/http-loader-factory';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  exports: [TranslateModule, CommonModule],
})
export class NgxAzCoreModule {}
