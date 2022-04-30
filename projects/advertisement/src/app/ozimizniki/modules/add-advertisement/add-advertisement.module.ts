import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdvertisementComponent } from './add-advertisement.component';
import { AddAdvertisementRoutes } from './add-advertisement.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  imports: [
    CommonModule,
    AddAdvertisementRoutes,
    FormsModule,
    ReactiveFormsModule,
    
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzIconModule,
    NzUploadModule,
    NzCheckboxModule,
    NzSelectModule
  ],
  declarations: [AddAdvertisementComponent, InfoComponent]
})
export class AddAdvertisementModule { }
