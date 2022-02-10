import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { RequestSignIn } from '../../shared/models/auth/request-sign-in.interface';
import { RequestSignUp } from '../../shared/models/auth/request-sign-up.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  constructor(private $auth: AuthService) {}

  ngOnInit() {
    this.signIn();
  }

  signIn() {
    const params: RequestSignIn = {
      client_id: '958cbf03-98f6-4506-ade9-b50ebbbdd0b8',
      client_secret: 'ElXRveZcAlVS2GuDvykIlSORdeOKrmOfog5pBZPl',
      login: '998941108410',
      password: '123456',
    };
    this.$auth.signIn(params).subscribe((w) => {
      console.log(w);
    });
  }

  /**
   *
   */
  signUp() {
    const model: RequestSignUp = {
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
