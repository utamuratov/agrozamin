import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { AccessActionComponent } from './access-action/access-action.component';

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
        component: UsersComponent,
        data: {
          bc: 'users',
        },
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          bc: 'role',
        },
      },
      {
        path: 'access-action',
        component: AccessActionComponent,
        data: {
          bc: 'accessAction',
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
