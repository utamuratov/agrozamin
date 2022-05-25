import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogMembersPartnerComponent } from './catalog-members-partner.component';

const routes: Routes = [{ path: '', component: CatalogMembersPartnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogMembersPartnerRoutingModule { }
