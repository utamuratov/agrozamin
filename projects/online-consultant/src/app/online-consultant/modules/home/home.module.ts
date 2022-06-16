import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './HomeRoutes.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [CommonModule, HomeRoutes, NzButtonModule, NzGridModule
  
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
