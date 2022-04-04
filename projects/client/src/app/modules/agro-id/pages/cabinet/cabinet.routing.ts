import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'personal',
        loadChildren: () =>
          import('./modules/personal/personal.module').then(
            (m) => m.PersonalModule
          ),
      },
      {
        path: 'legalperson',
        loadChildren: () =>
          import('./modules/legal-person/legal-person.module').then(
            (m) => m.LegalPersonModule
          ),
      },
      {
        path: 'busines-card',
        loadChildren: () =>
          import('./modules/business-card/business-card.module').then(
            (m) => m.BusinessCardModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
