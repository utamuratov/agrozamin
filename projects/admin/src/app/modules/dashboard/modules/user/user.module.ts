import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdminSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { NgxMaskModule } from 'ngx-mask';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AdminUsersService } from './services/admin-users.service';

@NgModule({
  declarations: [UserComponent, AddEditUserComponent],
  imports: [
    UserRoutingModule,

    NgxMaskModule,

    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzSelectModule,
    NzSwitchModule,
    NzToolTipModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzSwitchModule,
    NzTagModule,
  ],
  providers: [AdminUsersService],
})
export class UserModule {}
