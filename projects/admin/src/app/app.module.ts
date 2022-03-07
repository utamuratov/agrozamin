import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { InjectorHelper, NgxAzCoreModule } from 'ngx-az-core';
import { AppComponent } from './components/app/app.component';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HandleErrorInterceptor } from './core/interceptors/handle.error.interceptor';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent, RootLayoutComponent],
  imports: [
    AppRoutingModule,

    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),

    /**
     * CUSTOM MODULES
     */
    NgxAzCoreModule,

    /**
     * NZ MODULES
     */
    NzNotificationModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorHelper.injector = this.injector;
  }
}
