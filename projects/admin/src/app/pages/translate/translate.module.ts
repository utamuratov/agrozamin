import { InterfaceComponent } from './interface/interface.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { TranslateApiService } from './services/translate-api.service';


@NgModule({
  declarations: [
    TranslateComponent,
    InterfaceComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TranslateRoutingModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzButtonModule,
    NzGridModule,
    NzPageHeaderModule,
    NzDividerModule,
    NzTableModule,
    NzModalModule,
    NzSwitchModule,
    NzAutocompleteModule
  ],
  providers: [
    TranslateApiService
  ]
})
export class TranslateModule { }
