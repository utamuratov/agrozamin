import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants, markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { AuthService } from 'projects/agro-id/src/app/core/services/auth/auth.service';
import { map, Observable, startWith } from 'rxjs';
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

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

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
      this.isWaitingResponse$ = this.$auth
        .changePasswordStepFour({
          login: this.login,
          password: this.form.controls[Constants.PASSWORD].value,
        })
        .pipe(
          map((response) => {
            if (response.success) {
              this.router.navigate(['../../'], { relativeTo: this.route });
            }

            return false;
          }),
          startWith(true)
        );
    } else {
      markAllAsDirty(this.form);
    }
  }
}
