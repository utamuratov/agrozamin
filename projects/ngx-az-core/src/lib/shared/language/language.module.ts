import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CurrentLanguagePipe } from './currentLanguage.pipe';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  declarations: [LanguageComponent, CurrentLanguagePipe],
  imports: [
    CommonModule,
    NzDividerModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    FormsModule,
    NzGridModule,
  ],
  exports: [LanguageComponent],
})
export class LanguageModule {}
