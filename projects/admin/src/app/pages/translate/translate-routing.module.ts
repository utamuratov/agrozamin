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
    children: [
      {
        path: 'interface',
        component: InterfaceComponent,
      },
      { path: 'seo', component: SeoComponent },
      { path: 'contents', component: ContentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslateRoutingModule {}
