import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard, SEOResolver } from 'ngx-az-core';
import { AgroIdRoutingSharedModule } from 'projects/agro-id/src/app/app.module';
import { AgroZaminRoutingSharedModule } from '../../../agro-zamin/src/app/app.module';
import { LayoutComponent } from './layout/layout.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';

/**
 * https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527
 * RouterModule.forRoot(routes) does not work as expected.
 * So We need it really?
 */
// const routes: Routes = [
//   {
//     path: Constants.AGRO_ZAMIN_ROUTE_PATH,
//     loadChildren: () =>
//       import('../../../agro-zamin/src/app/app.module').then(
//         (m) => m.AgroZaminRoutingSharedModule
//       ),
//   },
// ];

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
//   },
//   {
//     path: Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
//     component: RootLayoutComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: Constants.DEFAULT_LANGUAGE_CODE,
//         pathMatch: 'full',
//       },
//       {
//         path: ':language',
//         component: LayoutComponent,
//         canActivate: [LanguageGuard],
//         children: [
//           {
//             path: '',
//             redirectTo: Constants.AGRO_ZAMIN_ROUTE_PATH,
//             pathMatch: 'full',
//           },
//           {
//             path: Constants.AGRO_ZAMIN_ROUTE_PATH,
//             loadChildren: () =>
//               import('../../../agro-zamin/src/app/app.module').then(
//                 (m) => m.AgroZaminRoutingSharedModule
//               ),
//           },
//           {
//             path: Constants.AGROID_ROUTE_PATH,
//             loadChildren: () =>
//               import('../../../agro-id/src/app/app.module').then(
//                 (m) => m.AgroIdRoutingSharedModule
//               ),
//           },
//         ],
//       },
//     ],
//   },
// ];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    AgroZaminRoutingSharedModule.forRoot(),
    AgroIdRoutingSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
