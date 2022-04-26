import { isDevMode, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { prefixPath } from '../core/utilits/agro-zamin.utilit';
import { environment } from '../environments/environment';
import { LayoutComponent } from './agro-zamin/components/layout/layout.component';
import { RootLayoutComponent } from './agro-zamin/components/root-layout/root-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: prefixPath,
  },
  {
    path: prefixPath,
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: Constants.DEFAULT_LANGUAGE_CODE,
        pathMatch: 'full',
      },
      {
        path: ':language',
        // component: LayoutComponent,
        loadChildren: () =>
          import('./agro-zamin/agro-zamin.module').then(
            (m) => m.AgroZaminModule
          ),
        canActivate: [LanguageGuard],
        // children: [
        //   {
        //     path: '',
        //     redirectTo: Constants.AGRO_ZAMIN_ROUTE_PATH,
        //     pathMatch: 'full',
        //   },
        //   {
        //     path: Constants.AGRO_ZAMIN_ROUTE_PATH,
        //     loadChildren: () =>
        //       import('./agro-zamin/agro-zamin.module').then(
        //         (m) => m.AgroZaminModule
        //       ),
        //   },
        // ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
