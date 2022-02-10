import { SignUpPage } from './pages/sign-up/sign-up.page';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInPage } from './pages/sign-in/sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: AgroIdComponent,
    children: [
      {
        path: '',
        component: SignInPage,
      },
      {
        path: 'sign-up',
        component: SignUpPage,
      },
    ],
  },
];

export const AgroIdRoutes = RouterModule.forChild(routes);
