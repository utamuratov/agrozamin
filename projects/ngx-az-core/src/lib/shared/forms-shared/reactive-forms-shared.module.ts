import { NgModule } from '@angular/core';
import { OnlyLetterDirective } from './directives/only-letter.directive';
import { ErrorComponent } from './components/error/error.component';
import { ErrorFromServerComponent } from './components/error-from-server/error-from-server.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ReactiveFormsModule,
    SharedModule,

    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
  ],
  declarations: [
    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
  ],
})
export class ReactiveFormsSharedModule {}
