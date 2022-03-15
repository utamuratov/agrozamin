import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { AdminSharedModule } from '../../shared/admin-shared.module';
import { AccessActionComponent } from './access-action/access-action.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { AddEditAccessActionComponent } from './access-action/add-edit-access-action/add-edit-access-action.component';

@NgModule({
  declarations: [
    AdminComponent,
    RoleComponent,
    UsersComponent,
    AddEditUserComponent,
    AccessActionComponent,
    AccessControlComponent,
    AddEditAccessActionComponent,
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzIconModule,
    NzTypographyModule,
    NzToolTipModule,
    NzTransferModule,
    NzDividerModule,
    NzTableModule,
    NzModalModule,
    NzSelectModule,
  ],
})
export class AdminModule {}
