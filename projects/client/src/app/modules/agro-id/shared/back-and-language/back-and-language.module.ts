import { NgModule } from '@angular/core';
import { BackAndLanguageComponent } from './back-and-language.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { LanguageModule, SharedModule } from 'ngx-az-core';

@NgModule({
  declarations: [BackAndLanguageComponent],
  imports: [
    SharedModule,
    LanguageModule,

    /**
     * NG ZORRO
     */
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzIconModule
  ],
  exports: [BackAndLanguageComponent],
})
export class BackAndLanguageModule {}
