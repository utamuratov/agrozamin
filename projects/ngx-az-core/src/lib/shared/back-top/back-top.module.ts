import { NgModule } from '@angular/core';
import { BackTopComponent } from './back-top.component';
import { SharedModule } from '../shared.module';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

@NgModule({
  declarations: [BackTopComponent],
  imports: [SharedModule, NzBackTopModule],
  exports: [BackTopComponent],
})
export class BackTopModule {}
