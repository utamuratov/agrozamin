import { NgModule } from '@angular/core';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TriangleModule } from '../../shared/triangle/triangle.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';


@NgModule({
  imports: [
    AgroIdRoutes,

    /**
     * CUSTOM MODULES
     */
    SharedModule,
    TriangleModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzGridModule,
    NzButtonModule,
    NzDividerModule,
    NzTypographyModule,
    
  ],
  declarations: [AgroIdComponent],
})
export class AgroIdModule {}
