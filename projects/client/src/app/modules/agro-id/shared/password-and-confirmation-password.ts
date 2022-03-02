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
      Constants.CONFIRMATION_PASSWORD,
      new FormControl(
        null,
        [Validators.required],
        [
          ValidationHelper.mustMatchPAsswordAsyncValidator(
            this.form,
            Constants.PASSWORD
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
      Constants.PASSWORD,
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
      .get(Constants.PASSWORD)
      ?.valueChanges.pipe(takeUntil(this.$ngDestroy))
      .subscribe(() => {
        this.form.controls[Constants.CONFIRMATION_PASSWORD].markAsDirty();
        this.form.controls[
          Constants.CONFIRMATION_PASSWORD
        ].updateValueAndValidity({
          onlySelf: true,
        });
      });
  }
}
