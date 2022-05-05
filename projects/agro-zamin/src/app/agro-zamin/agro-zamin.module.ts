import { NgModule } from '@angular/core';
import { AgroZaminRoutingModule } from './agro-zamin-routing.module';
import { AgroZaminComponent } from './agro-zamin.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BackTopModule, CallbackModule, SharedModule } from 'ngx-az-core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  declarations: [
    AgroZaminComponent,
    HeaderComponent,
    FooterComponent,
    LanguageComponent,
  ],
  imports: [
    AgroZaminRoutingModule,

    SharedModule,

    FormsModule,
    ReactiveFormsModule,

    CallbackModule,
    BackTopModule,

    NzGridModule,
    NzSelectModule,
    NzPopoverModule,
    NzDrawerModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzBackTopModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
  ],
})
export class AgroZaminModule {}
