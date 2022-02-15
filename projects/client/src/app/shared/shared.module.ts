import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OnlyLetterDirective } from './directives/only-letter.directive';
import { ErrorComponent } from './components/error/error.component';
import { ErrorFromServerComponent } from './components/error-from-server/error-from-server.component';
import { TriangleComponent } from './components/triangle/triangle.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  exports: [
    CommonModule,
    TranslateModule,
    CommonModule,
    TriangleComponent,

    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
  ],
  declarations: [
    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
    TriangleComponent,
  ],
})
export class SharedModule {}
