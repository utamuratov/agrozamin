import { Routes, RouterModule } from '@angular/router';
import { SignInTestComponent } from './sign-in-test.component';

const routes: Routes = [{ path: '', component: SignInTestComponent }];

export const SignInTestRoutes = RouterModule.forChild(routes);
