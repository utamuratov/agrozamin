import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OzimiznikiComponent } from './ozimizniki.component';
import { BackTopModule, CallbackModule, SharedModule } from 'ngx-az-core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OzimiznikiRoutes } from './ozimizniki.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from 'projects/agro-zamin/src/app/agro-zamin/components/header/pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    OzimiznikiRoutes,

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
  declarations: [
    OzimiznikiComponent,
    HeaderComponent,
    FilterPipe,
    FooterComponent,
  ],
})
export class OzimiznikiModule {}
