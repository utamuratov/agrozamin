import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from '../language/language.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LanguageMobileComponent } from './components/language-mobile/language-mobile.component';
import { PopupProfileComponent } from './components/popup-profile/popup-profile.component';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { HeaderComponent } from './header.component';
import { CategoryAsStringPipe } from './pipes/category-as-string.pipe';
import { CurrentLanguagePipe } from './pipes/current-language.pipe';
import { DrawerWidthPipe } from './pipes/drawerWidth.pipe';
import { RegionDistrictAsNodePipe } from './pipes/region-district-as-node.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import {
  NzFormsSharedModule,
  ReactiveFormsSharedModule,
  EcoSystemModule,
  FullNameModule,
} from 'ngx-az-core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [
    HeaderComponent,
    CategoryAsStringPipe,
    CurrentLanguagePipe,
    RegionDistrictAsNodePipe,
    CatalogueComponent,
    DrawerWidthPipe,
    LanguageComponent,
    PopupProfileComponent,
    CatalogueComponent,
    LanguageMobileComponent,
    UserPhotoComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,

    NzFormsSharedModule,
    ReactiveFormsSharedModule,
    EcoSystemModule,
    FullNameModule,

    NzGridModule,
    NzSelectModule,
    NzDrawerModule,
    NzDividerModule,
    NzIconModule,
    NzLayoutModule,
    NzModalModule,
    NzPopoverModule,
    NzCollapseModule,
    NzTreeSelectModule,
    NzEmptyModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
