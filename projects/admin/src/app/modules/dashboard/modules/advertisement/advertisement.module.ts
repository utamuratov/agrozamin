import { NgModule } from '@angular/core';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { AdvertisementService } from './services/advertisement.service';
import { AddEditAdvertisementComponent } from './add-edit-advertisement/add-edit-advertisement.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { AddEditAdvertisementSharedModule } from 'ngx-az-core';
import { RejectReasonModalComponent } from './reject-reason-modal/reject-reason-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    AdvertisementComponent,
    AdvertisementListComponent,
    AddEditAdvertisementComponent,
    RejectReasonModalComponent,
  ],
  imports: [
    AdvertisementRoutingModule,
    DashboardSharedModule,

    AddEditAdvertisementSharedModule,

    NzAutocompleteModule,
    NzModalModule,
    NzSelectModule,
  ],
  providers: [AdvertisementService],
})
export class AdvertisementModule {}
