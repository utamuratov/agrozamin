import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AddEditAdvertisementSharedModule, SharedModule } from 'ngx-az-core';
import { BreadcrumbModule } from '../../../../../shared/breadcrumb/breadcrumb.module';
import { AddAdvertisementComponent } from './add-advertisement.component';
import { AddAdvertisementRoutes } from './add-advertisement.routing';

@NgModule({
  imports: [
    AddAdvertisementRoutes,

    SharedModule,
    AddEditAdvertisementSharedModule,
    BreadcrumbModule,

    NzGridModule,
  ],
  declarations: [AddAdvertisementComponent],
})
export class AddAdvertisementModule {}
