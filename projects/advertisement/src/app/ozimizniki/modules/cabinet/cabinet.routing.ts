import { Routes, RouterModule } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { CabinetComponent } from './cabinet.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { AdvertisementResolver } from './components/advertisement/services/advertisment.resolver';
import { LayoutComponent } from './components/layout/layout.component';
import { Messages1Component } from './components/messages/components/messages1/messages1.component';
import { Messages2Component } from './components/messages/components/messages2/messages2.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SupportChatComponent } from './components/support-chat/support-chat.component';

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
            redirectTo: `advertisements/${AdvertisementStatus.STATUS_CONFIRMED}`,
            pathMatch: 'full',
          },
          {
            path: `advertisements/:status`,
            component: AdvertisementComponent,
            data: {
              bc: 'advertisements',
            },
            resolve: { advertisment: AdvertisementResolver },
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
          { path: 'support', component: SupportChatComponent },
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
