import { Routes, RouterModule } from '@angular/router';
import { SignInHelperComponent } from './sign-in-helper.component';

const routes: Routes = [{ path: '', component: SignInHelperComponent }];

export const SignInHelperRoutes = RouterModule.forChild(routes);
