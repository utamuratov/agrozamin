import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from './icons-provider.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InjectorHelper, LanguageModule, NgxAzCoreModule } from 'ngx-az-core';
import { AppComponent } from './components/app/app.component';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    BreadcrumbComponent,
  ],
  imports: [
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    IconsProviderModule,

    /**
     * CUSTOM MODULES
     */
    NgxAzCoreModule,
    LanguageModule,

    NzToolTipModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzAvatarModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorHelper.injector = this.injector;
  }
}
