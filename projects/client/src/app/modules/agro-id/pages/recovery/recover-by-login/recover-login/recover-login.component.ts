import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants, markAllAsDirty } from 'ngx-az-core';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { map, Observable, startWith } from 'rxjs';
import { RecoverLoginOptionsConfig } from '../recover-login-options/recover-login-options.component';

@Component({
  selector: 'recover-login',
  templateUrl: './recover-login.component.html',
  styleUrls: ['./recover-login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverLoginComponent implements OnInit {
  /*
   */
  @Output() changeStep = new EventEmitter<RecoverLoginOptionsConfig>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  isWaitingResponse$!: Observable<boolean>;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder, private $auth: AuthService) {}

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
    this.form = this.fb.group({
      login: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  submit(): void {
    if (this.form.valid) {
      this.isWaitingResponse$ = this.$auth
        .changePasswordStepOne({
          login: this.form.controls[Constants.LOGIN].value,
        })
        .pipe(
          map((response) => {
            if (response.success) {
              this.changeStep.emit({
                data: {
                  ...response.data,
                  login: this.form.controls[Constants.LOGIN].value,
                },
                nextStep: RecoverByLoginStep.LoginContactOptions,
              });
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
