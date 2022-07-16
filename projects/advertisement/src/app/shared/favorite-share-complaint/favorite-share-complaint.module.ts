import { NgModule } from '@angular/core';
import { FavoriteShareComplaintComponent } from './favorite-share-complaint.component';
import { NzFormsSharedModule, SharedModule } from 'ngx-az-core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ComplaintModalComponent } from './complaint-modal/complaint-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [FavoriteShareComplaintComponent, ComplaintModalComponent],
  imports: [
    SharedModule,
    NzGridModule,
    NzIconModule,
    NzFormsSharedModule,
    NzRadioModule,
    NzModalModule,
    ReactiveFormsModule,
  ],
  exports: [FavoriteShareComplaintComponent],
})
export class FavoriteShareComplaintModule {}
