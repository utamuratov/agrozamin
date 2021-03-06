import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LanguageComponent } from './components/language/language.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [DashboardComponent, BreadcrumbComponent, LanguageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    /**
     * NGX-AZ-CORE
     */
    TranslateModule,

    NzAvatarModule,
    NzLayoutModule,
    IconsProviderModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzGridModule,
    NzToolTipModule,
    NzDividerModule,
  ],
})
export class DashboardModule {}
