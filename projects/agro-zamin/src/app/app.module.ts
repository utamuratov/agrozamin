import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { InjectorHelper, NgxAzCoreModule } from 'ngx-az-core';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './home/components/header/header.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterComponent } from './home/components/footer/footer.component';

registerLocaleData(ru);

const providers = [{ provide: NZ_I18N, useValue: ru_RU }];

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    /**
     * CUSTOM MODULES
     */
    NgxAzCoreModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    SwiperModule,
    NzGridModule,
    NzSelectModule,
    NzPopoverModule,
    NzDrawerModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
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
export class AgroZaminRoutingSharedModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers,
    };
  }
}
