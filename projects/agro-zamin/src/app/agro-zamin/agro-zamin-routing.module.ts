import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgroZaminComponent } from './agro-zamin.component';

const routes: Routes = [
  {
    path: '',
    component: AgroZaminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroZaminRoutingModule {}
