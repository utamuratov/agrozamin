import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgroUsersComponent } from './components/agro-users/agro-users.component';
import { DistrictComponent } from './components/district/district.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { RegionsComponent } from './components/regions/regions.component';
import { RolesComponent } from './components/roles/roles.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {path: '', redirectTo: 'region', pathMatch: 'full'},
    {path: 'region', component: RegionsComponent},
    {path: 'district', component: DistrictComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'interface', component: InterfaceComponent},
    {path: 'agro-users', component: AgroUsersComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
