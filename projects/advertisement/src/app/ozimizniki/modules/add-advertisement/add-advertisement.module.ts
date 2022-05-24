import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { AddAdvertisementComponent } from './add-advertisement.component';
import { AddAdvertisementRoutes } from './add-advertisement.routing';
import { AddEditAdvertisementFullModule } from './add-edit-advertisement-full/add-edit-advertisement-full.module';

@NgModule({
  imports: [
    AddAdvertisementRoutes,

    SharedModule,
    AddEditAdvertisementFullModule,

    NzGridModule,
  ],
  declarations: [AddAdvertisementComponent],
})
export class AddAdvertisementModule {}
