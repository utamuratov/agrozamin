import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdminSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

    AdminSharedModule,
    NzSelectModule,
    NzSwitchModule,
  ],
})
export class UserModule {}
