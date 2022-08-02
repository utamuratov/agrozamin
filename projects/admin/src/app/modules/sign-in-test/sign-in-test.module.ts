import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInTestComponent } from './sign-in-test.component';
import { SignInTestRoutes } from './sign-in-test.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SignInTestRoutes,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule, 
    HttpClientModule
  ],
  declarations: [SignInTestComponent],
  providers: []
})
export class SignInTestModule { }
