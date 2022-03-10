import { ContentsComponent } from './contents/contents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateComponent } from './translate.component';
import { TranslationComponent } from './translation/translation.component';
import { TranslationType } from '../../core/enums/translation-type.enum';
import { SEOResolver } from 'ngx-az-core';

const routes: Routes = [
  {
    path: '',
    component: TranslateComponent,
    data: {
      bc: 'Translate',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: TranslationType[TranslationType.interface],
      },
      {
        path: TranslationType[TranslationType.interface],
        component: TranslationComponent,
        data: {
          bc: 'Interface',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: TranslationType[TranslationType.seo],
        component: TranslationComponent,
        resolve: [SEOResolver],
        data: {
          bc: 'Seo',
          meta: {
            title: 'seoTitle',
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
