import { NgModule } from '@angular/core';

import { SupportChatRoutingModule } from './support-chat-routing.module';
import { SupportChatComponent } from './support-chat.component';
import { SupportChatListComponent } from './support-chat-list/support-chat-list.component';
import { SupportChatItemComponent } from './support-chat-item/support-chat-item.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { SharedModule } from 'ngx-az-core';

@NgModule({
  declarations: [
    SupportChatComponent,
    SupportChatListComponent,
    SupportChatItemComponent,
  ],
  imports: [SharedModule, DashboardSharedModule, SupportChatRoutingModule],
})
export class SupportChatModule {}
