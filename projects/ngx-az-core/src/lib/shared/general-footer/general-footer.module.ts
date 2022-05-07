import { NgModule } from '@angular/core';
import { GeneralFooterComponent } from './general-footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [GeneralFooterComponent],
  imports: [SharedModule, NzGridModule],
  exports: [GeneralFooterComponent],
})
export class GeneralFooterModule {}
