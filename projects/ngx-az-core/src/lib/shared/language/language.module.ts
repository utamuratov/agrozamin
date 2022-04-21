import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CurrentLanguagePipe } from './currentLanguage.pipe';
@NgModule({
  declarations: [	LanguageComponent,
      CurrentLanguagePipe
   ],
  imports: [CommonModule, NzDividerModule, NzButtonModule, NzDropDownModule],
  exports: [LanguageComponent],
})
export class LanguageModule {}
