import { NgModule } from '@angular/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { SharedModule } from 'ngx-az-core';
import { EmptyComponent } from './empty.component';

@NgModule({
  imports: [NzEmptyModule, SharedModule],
  exports: [EmptyComponent],
  declarations: [EmptyComponent],
  providers: [],
})
export class EmptyModule {}
