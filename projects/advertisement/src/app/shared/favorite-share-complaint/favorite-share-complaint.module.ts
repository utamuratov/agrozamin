import { NgModule } from '@angular/core';
import { FavoriteShareComplaintComponent } from './favorite-share-complaint.component';
import { SharedModule } from 'ngx-az-core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [FavoriteShareComplaintComponent],
  imports: [SharedModule, NzGridModule, NzIconModule],
  exports: [FavoriteShareComplaintComponent],
})
export class FavoriteShareComplaintModule {}
