import { NgModule } from '@angular/core';
import { EcoSystemComponent } from './eco-system.component';
import { SharedModule } from '../shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [EcoSystemComponent],
  imports: [
    SharedModule,
    NzGridModule,
    NzDividerModule,
    NzPopoverModule,
    NzButtonModule,
  ],
  exports: [EcoSystemComponent],
})
export class EcoSystemModule {}
