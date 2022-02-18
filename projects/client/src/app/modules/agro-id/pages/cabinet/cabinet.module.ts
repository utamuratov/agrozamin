import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { CabinetRoutes } from './cabinet.routing';
import { NotificationComponent } from './pages/notification/notification.component';
import { UserNameModalComponent } from './pages/personal/components/user-name-modal/user-name-modal.component';
import { BiznesCardsComponent } from './pages/biznes-cards/biznes-cards.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SharedModule } from 'projects/client/src/app/shared/shared.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { BusinessCardModalComponent } from './components/business-card-modal/business-card-modal.component';
import { TriangleModule } from 'projects/client/src/app/shared/triangle/triangle.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { UserInfoModalComponent } from './pages/personal/components/user-info-modal/user-info-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutes,
    ReactiveFormsModule,

    /**
     * CUSTOM MODULES
     */
    SharedModule,
    TriangleModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzTypographyModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzAvatarModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzUploadModule,
    NzBadgeModule,
    NzListModule,
    NzTableModule,
    NzSpaceModule,
    NzAlertModule
  ],
  declarations: [
    CabinetComponent,
    PersonalComponent,
    LegalPersonComponent,
    UserNameModalComponent,
    BiznesCardsComponent,
    BusinessCardModalComponent,
    NotificationComponent,
    UserInfoModalComponent
  ],
})
export class CabinetModule {}
