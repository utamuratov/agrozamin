import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/client/src/app/shared/shared.module';
import { PasswordShowHideComponent } from './password-show-hide.component';

@NgModule({
  declarations: [PasswordShowHideComponent],
  imports: [SharedModule],
  exports: [PasswordShowHideComponent],
})
export class PasswordShowHideModule {}
