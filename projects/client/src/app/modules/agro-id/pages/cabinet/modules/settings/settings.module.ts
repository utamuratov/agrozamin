import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'ngx-az-core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SettingsRoutingModule,

    /**
     * ANGULAR NATIVE MODULES
     */
    FormsModule,

    /**
     * CUSTOM MODULES
     */
    SharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzDividerModule,
    NzSwitchModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
  ],
})
export class SettingsModule {}
