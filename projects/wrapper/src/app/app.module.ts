import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgroZaminRoutingSharedModule } from 'projects/agro-zamin/src/app/app.module';
import { AgroIdRoutingSharedModule } from 'projects/agro-id/src/app/app.module';
import { AdvertisementRoutingSharedModule } from 'projects/advertisement/src/app/app.module';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AgroZaminRoutingSharedModule.forRoot(),
    AgroIdRoutingSharedModule.forRoot(),
    AdvertisementRoutingSharedModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {}
