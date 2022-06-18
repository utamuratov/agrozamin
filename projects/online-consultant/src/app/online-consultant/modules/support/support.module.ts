import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SupportRoutes } from './support.routing';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutes,
    NzBreadCrumbModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzInputModule
  ],
  declarations: [SupportComponent]
})
export class SupportModule { }
