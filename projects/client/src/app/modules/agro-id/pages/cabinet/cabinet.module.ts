import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { CabinetRoutes } from './cabinet.routing';
/* NG-ZORRO */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutes,
    ReactiveFormsModule,
    /* NG-ZORRO */
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
    /* ??????? */
    NzBreadCrumbModule,
  ],
  declarations: [CabinetComponent, PersonalComponent, LegalPersonComponent],
})
export class CabinetModule {}
