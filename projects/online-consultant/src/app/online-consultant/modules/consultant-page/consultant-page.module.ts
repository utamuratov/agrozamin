import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantPageComponent } from './consultant-page.component';
import { ConsultantPageRoutes } from './consultant-page.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  imports: [
    CommonModule,
    ConsultantPageRoutes,
    NzGridModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDividerModule,
    NzImageModule,
    NzCommentModule,
    NzIconModule,
    NzAvatarModule
  ],
  declarations: [ConsultantPageComponent]
})
export class ConsultantPageModule { }
