import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutes } from './faq.routing';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  imports: [
    CommonModule, FaqRoutes,
    NzBreadCrumbModule,
    NzDividerModule,
    NzCollapseModule,
    NzIconModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
