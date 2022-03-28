import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { SignUpRequest } from '../../shared/models/auth/sign-up.request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  constructor(private $auth: AuthService) {}

  /**
   *
   */
  signUp() {
    const model: SignUpRequest = {
      f_name: 'test',
      s_name: 'test',
      l_name: 'test',
      email: 'test@test.test',
      phone: '998941108410',
      password: '123456',
    };
    this.$auth.signUp(model).subscribe((w) => {
      console.log(w);
    });
  }
}
