import { NgModule } from '@angular/core';
import { SupportChatComponent } from './support-chat.component';
import { SharedModule, SupportChatGeneralModule } from 'ngx-az-core';
import { SupportChatRoutes } from './support-chat.routing';

@NgModule({
  imports: [SupportChatRoutes, SharedModule, SupportChatGeneralModule],
  declarations: [SupportChatComponent],
})
export class SupportChatModule {}
