import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectReasonListComponent } from './reject-reason-list/reject-reason-list.component';

const routes: Routes = [
  {
    path: '',
    component: RejectReasonListComponent,
    data: {
      bc: 'rejectReasons',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectReasonRoutingModule {}
