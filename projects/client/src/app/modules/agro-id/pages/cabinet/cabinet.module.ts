import { NgModule } from '@angular/core';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';
import { BusinessCardModalComponent } from './components/business-card-modal/business-card-modal.component';
/* NG-ZORRO */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { TriangleModule } from 'projects/client/src/app/shared/triangle/triangle.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@NgModule({
  imports: [
    CabinetRoutes,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    TriangleModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzBadgeModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzTypographyModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,

    NzAvatarModule,
    NzUploadModule,
    NzSliderModule,
    FormsModule,

    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzAlertModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzPopoverModule,
  ],
  declarations: [
    CabinetComponent,
    BusinessCardModalComponent,
    SocialLinksComponent,
    HeaderComponent,
    AddAvatarComponent,
  ],
})
export class CabinetModule {}
