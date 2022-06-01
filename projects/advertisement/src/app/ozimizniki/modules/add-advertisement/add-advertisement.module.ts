import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AddEditAdvertisementSharedModule, SharedModule } from 'ngx-az-core';
import { AddAdvertisementComponent } from './add-advertisement.component';
import { AddAdvertisementRoutes } from './add-advertisement.routing';

@NgModule({
  imports: [
    AddAdvertisementRoutes,

    SharedModule,
    AddEditAdvertisementSharedModule,

    NzGridModule,
  ],
  declarations: [AddAdvertisementComponent],
})
export class AddAdvertisementModule {}
