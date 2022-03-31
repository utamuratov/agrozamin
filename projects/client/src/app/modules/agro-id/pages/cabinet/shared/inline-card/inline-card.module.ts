import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineCardComponent } from './inline-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [InlineCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzAvatarModule,
    NzButtonModule,
    NzGridModule,
    NzPopoverModule,
    NzIconModule,
  ],
  exports: [InlineCardComponent],
})
export class InlineCardModule {}
