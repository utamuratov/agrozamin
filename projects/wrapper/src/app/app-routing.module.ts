import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from 'ngx-az-core';
import { AgroIdRoutingSharedModule } from 'projects/agro-id/src/app/app.module';
import { AgroPayRoutingSharedModule } from 'projects/agro-pay/src/app/app.module';
import { AdvertisementRoutingSharedModule } from '../../../advertisement/src/app/app.module';
import { AgroZaminRoutingSharedModule } from '../../../agro-zamin/src/app/app.module';
import { OnlineConsultantRoutingSharedModule } from '../../../online-consultant/src/app/app.module';

/**
 *
 * https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527
 */
const routes: Routes = [
  {
    path: Constants.AGRO_ZAMIN_ROUTE_PATH,
    loadChildren: () =>
      import('../../../agro-zamin/src/app/app.module').then(
        (m) => m.AgroZaminRoutingSharedModule
      ),
  },
  {
    path: Constants.ADVERTISEMENT_ROUTE_PATH,
    loadChildren: () =>
      import('../../../advertisement/src/app/app.module').then(
        (m) => m.AdvertisementRoutingSharedModule
      ),
  },
  {
    path: Constants.ONLINE_CONSULTANT_ROUTE_PATH,
    loadChildren: () =>
      import('../../../online-consultant/src/app/app.module').then(
        (m) => m.OnlineConsultantRoutingSharedModule
      ),
  },
  {
    path: Constants.AGRO_PAY_ROUTE_PATH,
    loadChildren: () =>
      import('../../../agro-pay/src/app/app.module').then(
        (m) => m.AgroPayRoutingSharedModule
      ),
  },
  {
    path: Constants.AGROID_ROUTE_PATH,
    loadChildren: () =>
      import('../../../agro-id/src/app/app.module').then(
        (m) => m.AgroIdRoutingSharedModule
      ),
  },
  // * WE DO NOT NEED THIS ALTHOUGH IT IS SUGGESTED ON THE DOCUMENTAION
  // * WHY? BECAUSE, EACH SERVICE SHOULD BE OWN 404 PAGE AND THIS WILDCARD DOES NOT WORK
  // { path: '**', redirectTo: Constants.AGRO_ZAMIN_ROUTE_PATH },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgroZaminRoutingSharedModule.forRoot(),
    AdvertisementRoutingSharedModule.forRoot(),
    OnlineConsultantRoutingSharedModule.forRoot(),
    AgroPayRoutingSharedModule.forRoot(),

    // IMPORT AT THE END. THIS MODULE INCLUDES WILDCARD(**)
    AgroIdRoutingSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
