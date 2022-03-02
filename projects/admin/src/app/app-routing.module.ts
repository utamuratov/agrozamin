import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageUtilit } from 'ngx-az-core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: LanguageUtilit.currentLanguage,
    pathMatch: 'full',
  },
  {
    path: ':language',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          bc: 'User',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          bc: 'Category',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'translate',
        loadChildren: () =>
          import('./pages/translate/translate.module').then(
            (m) => m.TranslateModule
          ),
       },
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin/admin.module').then((m) => m.AdminModule),
       },
    ],
  },
  { path: ':language/sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
