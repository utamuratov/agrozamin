import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';
import { catchError, map, Observable, of, startWith } from 'rxjs';
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
  $isWaitingResponse!: Observable<boolean>;

  /**
   *
   */
  errorMessageFromServer!: ErrorItem;

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
      this.$isWaitingResponse = this.$auth
        .changePasswordStepOne({
          login: this.form.controls[Constants.LOGIN].value,
        })
        .pipe(
          map((response) => {
            this.changeStep.emit({
              data: {
                ...response,
                login: this.form.controls[Constants.LOGIN].value,
              },
              nextStep: RecoverByLoginStep.LoginContactOptions,
            });

            return false;
          }),
          startWith(true),
          catchError((errors: ErrorItem[]) => {
            this.errorMessageFromServer = errors[0];
            return of(false);
          })
        );
    } else {
      markAllAsDirty(this.form);
    }
  }
}
