import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutes } from './catalog.routing';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CatalogRoutes],
  declarations: [CatalogComponent],
})
export class CatalogModule {}
