import { NgModule } from '@angular/core';
import { SupportChatComponent } from './support-chat.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SupportChatRoutes } from './support-chat.routing';
import { FormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    SupportChatRoutes,
    FormsModule,
    SharedModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzSpinModule,
    NzIconModule,
  ],
  declarations: [SupportChatComponent],
})
export class SupportChatModule {}
