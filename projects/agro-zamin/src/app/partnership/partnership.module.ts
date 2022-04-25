import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnershipComponent } from './partnership.component';
import { PartnershipRoutes } from './partnership.routing';
import { ToBePartnerComponent } from './components/to-be-partner/to-be-partner.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ActivityFieldComponent } from './components/activity-field/activity-field.component';
import { CooperationPurposeComponent } from './components/cooperation-purpose/cooperation-purpose.component';
import { CooperationFormComponent } from './components/cooperation-form/cooperation-form.component';
import { PartnerBannerComponent } from './components/partner-banner/partner-banner.component';

@NgModule({
  imports: [
    CommonModule,
    PartnershipRoutes,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
  ],
  declarations: [
    PartnershipComponent,
    ToBePartnerComponent,
    ActivityFieldComponent,
    CooperationPurposeComponent, 
    CooperationFormComponent,
    PartnerBannerComponent
  ],
})
export class PartnershipModule {}
