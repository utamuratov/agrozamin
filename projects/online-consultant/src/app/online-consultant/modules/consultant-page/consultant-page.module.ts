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
import { NzListModule } from 'ng-zorro-antd/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

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
    NzAvatarModule,
    NzListModule,
    FormsModule,
    ReactiveFormsModule,
    NzModalModule,
    NzStepsModule,
    NzRadioModule,
    NzInputModule,
    NzFormModule,
    NzCheckboxModule
  ],
  declarations: [ConsultantPageComponent]
})
export class ConsultantPageModule { }
