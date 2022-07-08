import { NgModule } from '@angular/core';

import { RejectReasonRoutingModule } from './reject-reason-routing.module';
import { AddEditRejectReasonComponent } from './add-edit-reject-reason/add-edit-reject-reason.component';
import { RejectReasonListComponent } from './reject-reason-list/reject-reason-list.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';

@NgModule({
  declarations: [AddEditRejectReasonComponent, RejectReasonListComponent],
  imports: [RejectReasonRoutingModule, DashboardSharedModule],
})
export class RejectReasonModule {}
