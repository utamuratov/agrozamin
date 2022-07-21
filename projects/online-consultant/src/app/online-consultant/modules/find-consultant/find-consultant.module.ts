import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindConsultantComponent } from './find-consultant.component';
import { FindConsultantRoutes } from './find-consultant.routing';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    FindConsultantRoutes,
    FormsModule,
    ReactiveFormsModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzToolTipModule,
    NzInputNumberModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzButtonModule,
    NzIconModule
  ],
  declarations: [FindConsultantComponent]
})
export class FindConsultantModule { }
