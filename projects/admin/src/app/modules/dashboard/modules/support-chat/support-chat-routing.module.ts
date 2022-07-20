import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportChatItemComponent } from './support-chat-item/support-chat-item.component';
import { SupportChatListComponent } from './support-chat-list/support-chat-list.component';
import { SupportChatComponent } from './support-chat.component';

const routes: Routes = [
  {
    path: '',
    component: SupportChatComponent,
    children: [
      {
        path: '',
        component: SupportChatListComponent,
      },
      { path: ':chatId', component: SupportChatItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportChatRoutingModule {}
