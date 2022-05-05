import { NgModule } from '@angular/core';
import { OzimiznikiComponent } from './ozimizniki.component';
import {
  BackTopModule,
  CallbackModule,
  NzFormsSharedModule,
  ReactiveFormsSharedModule,
} from 'ngx-az-core';
import { FormsModule } from '@angular/forms';
import { OzimiznikiRoutes } from './ozimizniki.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './components/header/pipes/filter.pipe';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  imports: [
    OzimiznikiRoutes,
    FormsModule,

    NzFormsSharedModule,
    ReactiveFormsSharedModule,
    CallbackModule,
    BackTopModule,

    NzGridModule,
    NzSelectModule,
    NzPopoverModule,
    NzDrawerModule,
    NzDividerModule,
    NzIconModule,
    NzLayoutModule,
    NzModalModule,
  ],
  declarations: [
    OzimiznikiComponent,
    HeaderComponent,
    FilterPipe,
    FooterComponent,
    LanguageComponent,
  ],
})
export class OzimiznikiModule {}
