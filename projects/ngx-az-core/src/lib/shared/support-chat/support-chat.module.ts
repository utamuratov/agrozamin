import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SupportChatGeneralComponent } from './support-chat-general/support-chat-general.component';
import { NzImageService } from 'ng-zorro-antd/image';
import { SupportChatLogicComponent } from './support-chat-logic/support-chat-logic.component';
import { SharedModule } from '../shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SupportChatGeneralComponent, SupportChatLogicComponent],
  exports: [SupportChatGeneralComponent],
  imports: [
    FormsModule,
    SharedModule,
    NzGridModule,
    NzSpinModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzPopoverModule,
  ],
  providers: [DatePipe, NzImageService],
})
export class SupportChatGeneralModule {}
