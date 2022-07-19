import { Routes, RouterModule } from '@angular/router';
import { SupportChatComponent } from './support-chat.component';

const routes: Routes = [
  {
    path: '',
    component: SupportChatComponent,
  },
];

export const SupportChatRoutes = RouterModule.forChild(routes);
