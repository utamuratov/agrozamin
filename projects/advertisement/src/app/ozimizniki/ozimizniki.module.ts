import { NgModule } from '@angular/core';
import { OzimiznikiComponent } from './ozimizniki.component';
import {
  BackTopModule,
  CallbackModule,
  EcoSystemModule,
  FullNameModule,
  GeneralFooterModule,
  NzFormsSharedModule,
  ReactiveFormsSharedModule,
} from 'ngx-az-core';
import { FormsModule } from '@angular/forms';
import { OzimiznikiRoutes } from './ozimizniki.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './components/header/pipes/filter.pipe';
import { LanguageComponent } from './components/language/language.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { PopupProfileComponent } from './components/header/components/popup-profile/popup-profile.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CatalogueComponent } from './components/header/components/catalogue/catalogue.component';
import { DrawerWidthPipe } from './components/header/pipes/drawerWidth.pipe';

@NgModule({
  imports: [
    OzimiznikiRoutes,

    FormsModule,

    NzFormsSharedModule,
    ReactiveFormsSharedModule,
    CallbackModule,
    BackTopModule,
    EcoSystemModule,
    GeneralFooterModule,
    FullNameModule,

    NzGridModule,
    NzSelectModule,
    NzDrawerModule,
    NzDividerModule,
    NzIconModule,
    NzLayoutModule,
    NzModalModule,
    NzPopoverModule,
    NzCollapseModule,
  ],
  declarations: [
    OzimiznikiComponent,
    HeaderComponent,
    CatalogueComponent,
    DrawerWidthPipe,
    FilterPipe,
    FooterComponent,
    LanguageComponent,
    PopupProfileComponent,
    CatalogueComponent,
  ],
})
export class OzimiznikiModule {}
