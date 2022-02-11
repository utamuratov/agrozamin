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


@NgModule({
  declarations: [
    AdminComponent,
    RoleComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzButtonModule,
    NzGridModule,
    NzPageHeaderModule,
    NzDividerModule,
    NzTableModule
  ]
})
export class AdminModule { }
