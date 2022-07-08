import { NgModule } from '@angular/core';

import { RejectReasonRoutingModule } from './reject-reason-routing.module';
import { RejectReasonComponent } from './reject-reason.component';
import { AddEditRejectReasonComponent } from './add-edit-reject-reason/add-edit-reject-reason.component';
import { RejectReasonListComponent } from './reject-reason-list/reject-reason-list.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';

@NgModule({
  declarations: [
    RejectReasonComponent,
    AddEditRejectReasonComponent,
    RejectReasonListComponent,
  ],
  imports: [RejectReasonRoutingModule, DashboardSharedModule],
})
export class RejectReasonModule {}
