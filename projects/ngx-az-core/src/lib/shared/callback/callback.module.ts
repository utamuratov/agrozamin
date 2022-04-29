import { NgModule } from '@angular/core';
import { CallbackComponent } from './callback.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormsSharedModule } from '../forms-shared/nz-forms-shared.module';
import { ReactiveFormsSharedModule } from '../forms-shared/reactive-forms-shared.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [CallbackComponent],
  imports: [
    SharedModule,

    NzFormsSharedModule,
    ReactiveFormsSharedModule,

    NzModalModule,
    NzGridModule,
  ],
  exports: [CallbackComponent],
})
export class CallbackModule {}
