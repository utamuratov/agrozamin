import { NgModule } from '@angular/core';
import { SharedModule } from 'ngx-az-core';
import { PasswordShowHideComponent } from './password-show-hide.component';

@NgModule({
  declarations: [PasswordShowHideComponent],
  imports: [SharedModule],
  exports: [PasswordShowHideComponent],
})
export class PasswordShowHideModule {}
