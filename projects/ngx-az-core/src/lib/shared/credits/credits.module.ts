import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsComponent } from './credits.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [CreditsComponent],
  imports: [CommonModule, NzGridModule],
  exports: [CreditsComponent],
})
export class CreditsModule {}
