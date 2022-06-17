import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeConsultantComponent } from './become-consultant.component';
import { BecomeConsultantRoutes } from './become-consultant.routing';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  imports: [
    CommonModule,
    BecomeConsultantRoutes,
    FormsModule,
    ReactiveFormsModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule,
    NzStepsModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    NzCheckboxModule,
    NzDrawerModule
  ],
  declarations: [BecomeConsultantComponent]
})
export class BecomeConsultantModule { }
