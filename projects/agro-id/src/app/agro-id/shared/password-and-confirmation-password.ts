import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants, NgDestroy, ValidationHelper } from 'ngx-az-core';
import { takeUntil } from 'rxjs';

export class PasswordAndConfirmationPassword {
  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  confirmationPassword = Constants.CONFIRMATION_PASSWORD;

  /**
   *
   */
  password = Constants.PASSWORD;

  /**
   *
   */
  constructor(protected $ngDestroy: NgDestroy) {}

  /**
   *
   */
  protected addPasswordAndConfrimationPasswordControls() {
    this.addPasswordControl();
    this.addConfirmationPasswordControl();
    this.onPasswordValueChanges();
  }

  /**
   *
   */
  private addConfirmationPasswordControl() {
    this.form.addControl(
      this.confirmationPassword,
      new FormControl(
        null,
        [Validators.required],
        [
          ValidationHelper.mustMatchPAsswordAsyncValidator(
            this.form,
            this.password
          ),
        ]
      )
    );
  }

  /**
   *
   */
  private addPasswordControl() {
    this.form.addControl(
      this.password,
      new FormControl(null, [
        Validators.required,
        Validators.minLength(Constants.PASSWORD_MIN_LENGTH),
      ])
    );
  }

  /**
   *
   */
  private onPasswordValueChanges() {
    this.form
      .get(this.password)
      ?.valueChanges.pipe(takeUntil(this.$ngDestroy))
      .subscribe(() => {
        this.form.controls[this.confirmationPassword].markAsDirty();
        this.form.controls[this.confirmationPassword].updateValueAndValidity({
          onlySelf: true,
        });
      });
  }
}
