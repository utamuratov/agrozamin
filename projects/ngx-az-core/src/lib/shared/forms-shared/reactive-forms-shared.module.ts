import { NgModule } from '@angular/core';
import { OnlyLetterDirective } from './directives/only-letter.directive';
import { ErrorComponent } from './components/error/error.component';
import { ErrorFromServerComponent } from './components/error-from-server/error-from-server.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { ErrorAsAlertComponent } from './components/error-as-alert/error-as-alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  imports: [ReactiveFormsModule, SharedModule, NzAlertModule],
  exports: [
    ReactiveFormsModule,
    SharedModule,

    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
    ErrorAsAlertComponent,
  ],
  declarations: [
    OnlyLetterDirective,
    ErrorComponent,
    ErrorFromServerComponent,
    ErrorAsAlertComponent,
  ],
})
export class ReactiveFormsSharedModule {}
