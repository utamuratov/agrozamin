import { ContentsComponent } from './contents/contents.component';
import { InterfaceComponent } from './interface/interface.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateComponent } from './translate.component';
import { SeoComponent } from './seo/seo.component';

const routes: Routes = [
  {
    path: '',
    component: TranslateComponent,
    data: {
      bc: 'Translate'
    },
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'interface'},
      {
        path: 'interface',
        component: InterfaceComponent,
        data: {
          bc: 'Interface',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'seo',
        component: SeoComponent,
        data: {
          bc: 'Seo',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'contents',
        component: ContentsComponent,
        data: {
          bc: 'Contents',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslateRoutingModule {}
