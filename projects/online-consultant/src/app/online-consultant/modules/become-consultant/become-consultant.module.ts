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

@NgModule({
  imports: [
    CommonModule,
    BecomeConsultantRoutes,
    NzBreadCrumbModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule,
    NzStepsModule
  ],
  declarations: [BecomeConsultantComponent]
})
export class BecomeConsultantModule { }
