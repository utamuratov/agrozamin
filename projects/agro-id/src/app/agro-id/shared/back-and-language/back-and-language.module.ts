import { NgModule } from '@angular/core';
import { BackAndLanguageComponent } from './back-and-language.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LanguageComponent } from './language/language.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [BackAndLanguageComponent, LanguageComponent],
  imports: [
    SharedModule,

    /**
     * NG ZORRO
     */
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzIconModule,

    // For Language component
    NzButtonModule,
    NzDividerModule,
  ],
  exports: [BackAndLanguageComponent],
})
export class BackAndLanguageModule {}
