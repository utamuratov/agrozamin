import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineConsultantComponent } from './online-consultant.component';

const routes: Routes = [{ path: '', component: OnlineConsultantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineConsultantRoutingModule {}
