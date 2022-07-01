import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

/* TEST FOR ME */
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './components/regions/components/modal/modal.component';
import { DistrictComponent } from './components/district/district.component';
import { RegionsComponent } from './components/regions/regions.component';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { DistrictModalComponent } from './components/district/components/modal/modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent,
    DistrictComponent,
    RegionsComponent,
    DistrictModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    /* TEST FOR ME */
    FormsModule,
    ReactiveFormsModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    NzTableModule,
    NzModalModule,
    NzSelectModule
  ]
})
export class HomeModule { }
