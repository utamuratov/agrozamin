import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { AccessActionComponent } from './access-action/access-action.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { AddEditAccessActionComponent } from './access-action/add-edit-access-action/add-edit-access-action.component';
import { AddEditRoleComponent } from './role/add-edit-role/add-edit-role.component';
import { AddEditAccessControlComponent } from './access-control/add-edit-access-control/add-edit-access-control.component';
import { AdminSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { BaseAddEditComponent } from './access-action/base-add-edit/base-add-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    RoleComponent,
    UsersComponent,
    AddEditUserComponent,
    AccessActionComponent,
    AccessControlComponent,
    AddEditAccessActionComponent,
    AddEditRoleComponent,
    AddEditAccessControlComponent,
    BaseAddEditComponent,
  ],
  imports: [
    AdminRoutingModule,

    /**
     * CUSTOM MODULES
     */
    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzTypographyModule,
    NzToolTipModule,
    NzTransferModule,
    NzSelectModule,
  ],
})
export class AdminModule {}
