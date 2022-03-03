import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { InjectorHelper, NgxAzCoreModule } from 'ngx-az-core';
import { AppComponent } from './components/app/app.component';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent
  ],
  imports: [
    AppRoutingModule,

    /**
     * CUSTOM MODULES
     */
    NgxAzCoreModule,

    /**
     * NZ MODULES
     */
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorHelper.injector = this.injector;
  }
}
