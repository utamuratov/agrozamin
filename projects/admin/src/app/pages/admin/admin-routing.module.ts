import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children: [
    {path: 'users', component: UsersComponent},
    {path: 'role', component: RoleComponent},
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
