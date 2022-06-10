import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './online-consultant.component';
import { OnlineConsultantRoutingModule } from './online-consultant.routing';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [CommonModule, OnlineConsultantRoutingModule, NzIconModule, NzGridModule, NzButtonModule],
  declarations: [OnlineConsultantComponent,HeaderComponent,FooterComponent],
})
export class OnlineConsultantModule {}
