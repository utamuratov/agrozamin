import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutRoutes } from './about.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [CommonModule, AboutRoutes, NzGridModule],
  declarations: [AboutComponent, BannerComponent],
})
export class AboutModule {}
