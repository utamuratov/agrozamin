import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { AddAdvertisementComponent } from './add-advertisement.component';
import { AddAdvertisementRoutes } from './add-advertisement.routing';
import { AddEditAdvertisementSharedModule } from './add-edit-advertisement-full/add-edit-advertisement-full.module';

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
