import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { NgDestroy } from 'projects/client/src/app/core/services/ng-destroy.service';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';
import { PasswordAndConfirmationPassword } from '../../../../shared/password-and-confirmation-password';

@Component({
  selector: 'create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.less'],
})
export class CreateNewPasswordComponent
  extends PasswordAndConfirmationPassword
  implements OnInit
{
  /**
   *
   * @param fb
   * @param router
   * @param route
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    protected override $ngDestroy: NgDestroy,
    private $auth: AuthService
  ) {
    super($ngDestroy);
  }

  /**
   *
   */
  @Input()
  login!: string;

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({});
    super.addPasswordAndConfrimationPasswordControls();
  }

  /**
   *
   */
  submit(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
      this.$auth
        .changePasswordStepFour({
          login: this.login,
          password: this.form.controls[Constants.PASSWORD].value,
        })
        .subscribe((response) => {
          console.log(response);

          this.router.navigate(['../../'], { relativeTo: this.route });
        });
    } else {
      markAllAsDirty(this.form);
    }
  }
}
