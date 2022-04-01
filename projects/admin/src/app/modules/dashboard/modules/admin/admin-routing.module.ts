import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { AccessActionComponent } from './access-action/access-action.component';
import { AccessControlComponent } from './access-control/access-control.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      bc: 'admin',
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      {
        path: 'users',
        loadChildren: () =>
          import('./../user/user.module').then((m) => m.UserModule),
        data: {
          bc: 'users',
        },
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          bc: 'roles',
        },
      },
      {
        path: 'access-action',
        component: AccessActionComponent,
        data: {
          bc: 'actions',
        },
      },
      {
        path: 'access-control',
        component: AccessControlComponent,
        data: {
          bc: 'controls',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
