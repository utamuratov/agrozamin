import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AgroIdComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
      {
        path: 'recovery',
        loadChildren: () =>
          import('./pages/recovery/recovery.module').then(
            (m) => m.RecoveryModule
          ),
      },
    ],
  },
  {
    path: 'cabinet',
    loadChildren: () =>
      import('./pages/cabinet/cabinet.module').then((m) => m.CabinetModule),
  },
];

export const AgroIdRoutes = RouterModule.forChild(routes);
