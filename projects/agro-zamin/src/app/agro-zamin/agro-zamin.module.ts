import { NgModule } from '@angular/core';
import { AgroZaminRoutingModule } from './agro-zamin-routing.module';
import { AgroZaminComponent } from './agro-zamin.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {
  BackTopModule,
  CallbackModule,
  EcoSystemModule,
  GeneralFooterModule,
  SharedModule,
} from 'ngx-az-core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
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
    FormsModule,

    SharedModule,
    CallbackModule,
    BackTopModule,
    EcoSystemModule,
    GeneralFooterModule,

    NzGridModule,
    NzSelectModule,
    NzDrawerModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzModalModule,
    NzInputModule,
  ],
})
export class AgroZaminModule {}
