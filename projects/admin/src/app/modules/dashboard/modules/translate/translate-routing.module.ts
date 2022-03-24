import { ContentsComponent } from './components/contents/contents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateComponent } from './translate.component';
import { TranslationComponent } from './translation/translation.component';
import { SEOResolver } from 'ngx-az-core';
import { TranslationType } from 'projects/admin/src/app/core/enums/translation-type.enum';

const routes: Routes = [
  {
    path: '',
    component: TranslateComponent,
    data: {
      bc: 'translate',
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
          bc: 'interface',
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
          bc: 'seo',
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
          bc: 'contents',
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
