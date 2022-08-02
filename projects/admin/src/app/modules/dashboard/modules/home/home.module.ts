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
import { RolesComponent } from './components/roles/roles.component';
import { RoleModalComponent } from './components/roles/components/role-modal/role-modal.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { InterfaceComponent } from './components/interface/interface.component';
import { InterfaceModalComponent } from './components/interface/components/interface-modal/interface-modal.component';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { AgroUsersComponent } from './components/agro-users/agro-users.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { UsersModalComponent } from './components/agro-users/components/users-modal/users-modal.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { OzimiznikiComponent } from './components/ozimizniki/ozimizniki.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent,
    DistrictComponent,
    RegionsComponent,
    DistrictModalComponent,
    RolesComponent,
    RoleModalComponent,
    InterfaceComponent,
    InterfaceModalComponent,
    AgroUsersComponent,
    UsersModalComponent,
    OzimiznikiComponent
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
    NzSelectModule,
    NzTagModule,
    NzTreeSelectModule,
    NzToolTipModule,
    NzTransferModule,
    NzPopconfirmModule,
    NzSwitchModule,
    NgxMaskModule.forRoot(maskConfig),
  ]
})
export class HomeModule { }
