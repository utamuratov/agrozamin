import { NgModule } from '@angular/core';
import { OzimiznikiComponent } from './ozimizniki.component';
import {
  BackTopModule,
  CallbackModule,
  GeneralFooterModule,
} from 'ngx-az-core';
import { OzimiznikiRoutes } from './ozimizniki.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  imports: [
    OzimiznikiRoutes,

    CallbackModule,
    BackTopModule,
    GeneralFooterModule,
    HeaderModule,

    NzGridModule,
  ],
  declarations: [OzimiznikiComponent, FooterComponent],
})
export class OzimiznikiModule {}
