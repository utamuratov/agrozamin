import { Routes, RouterModule } from '@angular/router';
import { CatalogMembersPartnerComponent } from './modules/catalog-members-partner/catalog-members-partner.component';
import { OzimiznikiComponent } from './ozimizniki.component';

const routes: Routes = [
  {
    path: '',
    component: OzimiznikiComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./modules/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'members',
        loadChildren: () =>
          import(
            './modules/catalog-members-partner/catalog-members-partner.module'
          ).then((m) => m.CatalogMembersPartnerModule),
      },
      {
        path: 'advertisement',
        loadChildren: () =>
          import('./modules/add-advertisement/add-advertisement.module').then(
            (m) => m.AddAdvertisementModule
          ),
      },
      {
        path: 'cabinet',
        loadChildren: () =>
          import('./modules/cabinet/cabinet.module').then(
            (m) => m.CabinetModule
          ),
      },
    ],
  },
];

export const OzimiznikiRoutes = RouterModule.forChild(routes);
