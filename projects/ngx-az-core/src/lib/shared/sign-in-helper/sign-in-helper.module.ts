import { NgModule } from '@angular/core';
import { SignInHelperComponent } from './sign-in-helper.component';
import { SignInHelperRoutes } from './sign-in-helper.routing';
import { ReactiveFormsSharedModule } from '../forms-shared/reactive-forms-shared.module';
import { NzFormsSharedModule } from '../forms-shared/nz-forms-shared.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    SignInHelperRoutes,

    NzDividerModule,
  ],
  declarations: [SignInHelperComponent],
})
export class SignInHelperModule {}
