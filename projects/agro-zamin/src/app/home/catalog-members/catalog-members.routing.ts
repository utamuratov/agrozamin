import { PartnersMembersComponent } from './components/partners-members/partners.component';
import { RouterModule, Routes } from "@angular/router";
import { CatalogMembersComponent } from "./catalog-members.component";
import { CatalogMembersPartnerComponent } from "./components/catalog-members-partner/catalog-members-partner.component";

const routes: Routes = [
    {path: '', component: CatalogMembersComponent, children: [
        {path: '', component: PartnersMembersComponent},
        {path: ':id', component: CatalogMembersPartnerComponent}
    ]},
    
]

export const CatalogMembersRoutes = RouterModule.forChild(routes)