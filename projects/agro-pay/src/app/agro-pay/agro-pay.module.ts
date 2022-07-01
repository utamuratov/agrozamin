import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroPayComponent } from './agro-pay.component';
import { AgroPayRoutes } from './agro-pay.routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  imports: [CommonModule, AgroPayRoutes, NzLayoutModule,NzIconModule, NzMenuModule],
  declarations: [AgroPayComponent, SidebarComponent, HeaderComponent],
})
export class AgroPayModule {}
