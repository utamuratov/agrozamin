import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoveryPage } from './components/recover-page/recovery.page';
import { RecoverTypesComponent } from './components/recover-types/recover-types.component';
import { RecoverByContactsComponent } from './recover-by-contacts/recover-by-contacts/recover-by-contacts.component';
import { RecoverByLoginComponent } from './recover-by-login/recover-by-login/recover-by-login.component';

const routes: Routes = [
  {
    path: '',
    component: RecoveryPage,
    children: [
      {
        path: '',
        component: RecoverTypesComponent,
      },
      { path: 'by-login', component: RecoverByLoginComponent },
      {
        path: 'by-contacts',
        component: RecoverByContactsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryRoutingModule {}
