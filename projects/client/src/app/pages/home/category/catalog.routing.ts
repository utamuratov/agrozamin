import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog.component";

const routes: Routes = [
    {path: '', component: CatalogComponent}
] 

export const CatalogRoutes = RouterModule.forChild(routes)