import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      bc: 'Admin'
    },
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'users'},
      {
        path: 'users',
        component: UsersComponent,
        data: {
          bc: 'Users',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          bc: 'Role',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
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
