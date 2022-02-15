import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnlyLetterDirective } from './directives/only-letter.directive';
import { ErrorComponent } from './components/error/error.component';
import { ErrorFromServerComponent } from './components/error-from-server/error-from-server.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TriangleComponent } from './components/triangle/triangle.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NzTypographyModule],
  exports: [
    CommonModule,
    TranslateModule,
    CommonModule,
    TriangleComponent
    NzTypographyModule,

    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
  ],
  declarations: [
    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
    TriangleComponent
  ]
})
export class SharedModule {}
