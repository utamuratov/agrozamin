import { Routes, RouterModule } from '@angular/router';
import { CabinetMenu } from '../../menu-type.enum';
import { SupportChatComponent } from './support-chat.component';

const routes: Routes = [
  {
    path: '',
    component: SupportChatComponent,
    data: {
      bc: {
        name: CabinetMenu.support,
        value: CabinetMenu.support,
        list: Object.keys(CabinetMenu).map((value) => {
          return {
            name: value,
            value,
          };
        }),
      },
    },
  },
];

export const SupportChatRoutes = RouterModule.forChild(routes);
