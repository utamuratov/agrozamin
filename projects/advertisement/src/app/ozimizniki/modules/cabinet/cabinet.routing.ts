import { Routes, RouterModule } from '@angular/router';
import { AdvertisementConstants } from '../../../core/constants/advertisement.constants';
import { CabinetComponent } from './cabinet.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ArchivedMessagesComponent } from './components/messages/components/archived-messages/archived-messages.component';
import { BlockedMessagesComponent } from './components/messages/components/blocked-messages/blocked-messages.component';
import { ChatComponent } from './components/messages/components/chat/chat.component';
import { Messages2Component } from './components/messages/components/messages2/messages2.component';
import { SavedMessagesComponent } from './components/messages/components/saved-messages/saved-messages.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CabinetMenu, CabinetMenuList } from './menu-type.enum';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    data: {
      bc: 'cabinet',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AdvertisementConstants.ROUTER_PATH_CABINET_MAIN,
      },
      {
        path: AdvertisementConstants.ROUTER_PATH_CABINET_MAIN,
        component: LayoutComponent,
        children: [
          {
            path: '',
            redirectTo: CabinetMenu.advertisements,
            pathMatch: 'full',
          },
          {
            path: CabinetMenu.advertisements,
            loadChildren: () =>
              import('./modules/advertisement/advertisement.module').then(
                (m) => m.AdvertisementModule
              ),
            data: {
              bc: {
                name: CabinetMenu.advertisements,
                value: CabinetMenu.advertisements,
                list: CabinetMenuList,
              },
            },
          },
          {
            path: CabinetMenu.messages,
            component: MessagesComponent,
            data: {
              bc: {
                name: CabinetMenu.messages,
                value: CabinetMenu.messages,
                list: CabinetMenuList,
              },
            },
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'chat' },
              { path: 'chat', component: ChatComponent },
              { path: 'messages2', component: Messages2Component },
              { path: 'saved', component: SavedMessagesComponent },
              { path: 'archived', component: ArchivedMessagesComponent },
              { path: 'blocked', component: BlockedMessagesComponent },
            ],
          },
          {
            path: CabinetMenu.favourites,
            loadChildren: () =>
              import('./modules/favourite/favourite.module').then(
                (m) => m.FavouriteModule
              ),
          },
          {
            path: CabinetMenu.support,
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
