import { RouterModule, Routes } from "@angular/router";
import { CatalogMembersComponent } from "./catalog-members.component";

const routes: Routes = [
    {path: '', component: CatalogMembersComponent}
]

export const CatalogMembersRoutes = RouterModule.forChild(routes)