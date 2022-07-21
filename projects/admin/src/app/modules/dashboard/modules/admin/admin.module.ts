import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AccessActionComponent } from './access-action/access-action.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { AddEditAccessActionComponent } from './access-action/add-edit-access-action/add-edit-access-action.component';
import { AddEditRoleComponent } from './role/add-edit-role/add-edit-role.component';
import { AddEditAccessControlComponent } from './access-control/add-edit-access-control/add-edit-access-control.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { ControlActionToStringPipe } from './role/pipes/control-action-to-string.pipe';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AdminComponent,
    RoleComponent,
    AccessActionComponent,
    AccessControlComponent,
    AddEditAccessActionComponent,
    AddEditRoleComponent,
    AddEditAccessControlComponent,

    ControlActionToStringPipe,
  ],
  imports: [
    AdminRoutingModule,
    NgxMaskModule,

    /**
     * CUSTOM MODULES
     */
    DashboardSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzTypographyModule,
    NzToolTipModule,
    NzTransferModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzSwitchModule,
  ],
})
export class AdminModule {}
