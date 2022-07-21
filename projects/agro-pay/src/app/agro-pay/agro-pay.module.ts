import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroPayComponent } from './agro-pay.component';
import { AgroPayRoutes } from './agro-pay.routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgroPayRoutes,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    NzDropDownModule,
    NzButtonModule,
    NzAvatarModule,
    NzPopoverModule,
    ClickOutsideModule
  ],
  declarations: [AgroPayComponent, SidebarComponent, HeaderComponent],
})
export class AgroPayModule {}
