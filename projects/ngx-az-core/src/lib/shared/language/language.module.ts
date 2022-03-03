import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [LanguageComponent],
  imports: [CommonModule, NzDividerModule, NzButtonModule],
  exports: [LanguageComponent]
})
export class LanguageModule {}
