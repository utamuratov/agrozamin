import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Messages1Component } from './components/messages/components/messages1/messages1.component';
import { Messages2Component } from './components/messages/components/messages2/messages2.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    data: {
      bc: 'cabinet',
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      {
        path: 'main',
        component: LayoutComponent,
        children: [
          {
            path: '',
            redirectTo: `advertisements`,
            pathMatch: 'full',
          },
          {
            path: `advertisements`,
            loadChildren: () =>
              import('./modules/advertisement/advertisement.module').then(
                (m) => m.AdvertisementModule
              ),
          },
          {
            path: 'messages',
            component: MessagesComponent,
            children: [
              { path: 'messages1', component: Messages1Component },
              { path: 'messages2', component: Messages2Component },
            ],
          },
          {
            path: 'favourites',
            loadChildren: () =>
              import('./modules/favourite/favourite.module').then(
                (m) => m.FavouriteModule
              ),
          },
          {
            path: 'support',
            loadChildren: () =>
              import('./modules/support-chat/support-chat.module').then(
                (m) => m.SupportChatModule
              ),
          },
        ],
      },
      {
        path: 'advertisement',
        loadChildren: () =>
          import('./modules/add-advertisement/add-advertisement.module').then(
            (m) => m.AddAdvertisementModule
          ),
      },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
