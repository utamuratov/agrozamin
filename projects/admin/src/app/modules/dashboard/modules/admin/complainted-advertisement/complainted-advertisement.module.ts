import { NgModule } from '@angular/core';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ComplaintedAdvertisementRoutes } from './complainted-advertisement.routing';
import { ComplaintedAdvertisementListComponent } from './complainted-advertisement-list/complainted-advertisement-list.component';
import { BlockAdvertisementModalComponent } from './block-advertisement-modal/block-advertisement-modal.component';
import { AdvertisementUrlPipe } from './pipes/advertisement-url.pipe';

@NgModule({
  imports: [
    DashboardSharedModule,
    ComplaintedAdvertisementRoutes,
    NzModalModule,
  ],
  declarations: [
    ComplaintedAdvertisementListComponent,
    BlockAdvertisementModalComponent,
    AdvertisementUrlPipe,
  ],
})
export class ComplaintedAdvertisementModule {}
