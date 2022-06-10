import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './HomeRoutes.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [CommonModule, HomeRoutes, NzButtonModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
