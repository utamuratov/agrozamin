import { NgModule } from '@angular/core';
import { BusinessCardRoutingModule } from './business-card-routing.module';
import { BusinessCardPage } from './components/business-card/business-card.page';
import { AddEditBusinessCardComponent } from './components/add-edit-business-card/add-edit-business-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { InlineCardModule } from '../../shared/inline-card/inline-card.module';

@NgModule({
  declarations: [BusinessCardPage, AddEditBusinessCardComponent],
  imports: [
    BusinessCardRoutingModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    InlineCardModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzTypographyModule,
    NzCardModule,
    NzDividerModule,
    NzPopoverModule,
    NzAvatarModule,
    NzModalModule,
    NzIconModule,
  ],
})
export class BusinessCardModule {}
