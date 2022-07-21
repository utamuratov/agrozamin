import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { SignInRoutingModule } from './sign-in.routing';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    SignInRoutingModule,

    /**
     * NGX-AZ-CORE MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzCheckboxModule,
    NzGridModule,
    NzDividerModule,
  ],
})
export class SignInModule {}
