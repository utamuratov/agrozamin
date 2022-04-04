import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CatalogMembersComponent } from "./catalog-members.component";
import { CatalogMembersRoutes } from "./catalog-members.routing";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, CatalogMembersRoutes],
    declarations: [
        CatalogMembersComponent,
    ]
})

export class CatalogMembersModule {}