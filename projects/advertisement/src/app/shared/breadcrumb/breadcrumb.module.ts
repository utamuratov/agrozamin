import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { SharedModule } from 'ngx-az-core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  imports: [RouterModule, SharedModule, NzGridModule, NzBreadCrumbModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
