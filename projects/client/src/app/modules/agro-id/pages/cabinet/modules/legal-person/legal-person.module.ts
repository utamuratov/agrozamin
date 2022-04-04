import { NgModule } from '@angular/core';
import { LegalPersonPage } from './components/legal-person/legal-person.page';
import { CompanyModalComponent } from './components/company-modal/company-modal.component';
import { LegalPersonRoutes } from './legal-person.routing';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { InlineCardModule } from '../../shared/inline-card/inline-card.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [LegalPersonPage, CompanyModalComponent],
  imports: [
    LegalPersonRoutes,

    /**
     * CUSTOM SHARED MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    InlineCardModule,

    /**
     * NG ZORRO MODULES
     */
    NzModalModule,
    NzAvatarModule,
    NzTypographyModule,
    NzIconModule,
  ],
  exports: [
    // TODO: TURN THIS CCOMPONENT TO SHARD MODULE
    CompanyModalComponent,
  ],
})
export class LegalPersonModule {}
