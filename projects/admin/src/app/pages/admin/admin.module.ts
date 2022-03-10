import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTransferModule } from 'ng-zorro-antd/transfer';


@NgModule({
  declarations: [
    AdminComponent,
    RoleComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    AdminRoutingModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzButtonModule,
    NzGridModule,
    NzPageHeaderModule,
    NzDividerModule,
    NzTableModule,
    NzModalModule,
    NzSwitchModule,
    NzTypographyModule,
    NzAutocompleteModule,
    NzTransferModule
  ]
})
export class AdminModule { }
