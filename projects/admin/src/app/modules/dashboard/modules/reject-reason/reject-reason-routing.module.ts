import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectReasonListComponent } from './reject-reason-list/reject-reason-list.component';
import { RejectReasonComponent } from './reject-reason.component';

const routes: Routes = [
  {
    path: '',
    component: RejectReasonComponent,
    children: [{ path: '', component: RejectReasonListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectReasonRoutingModule {}
