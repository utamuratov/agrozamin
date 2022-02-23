import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';

@Component({
  selector: 'recover-login',
  templateUrl: './recover-login.component.html',
  styleUrls: ['./recover-login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverLoginComponent implements OnInit {
  /*
   */
  @Output() changeStep = new EventEmitter<RecoverByLoginStep>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder) {}

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
  submitForm(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
      this.goToNextStep();
    } else {
      markAllAsDirty(this.form);
    }
  }

  /**
   *
   */
  goToNextStep(): void {
    this.changeStep.emit(RecoverByLoginStep.LoginContactOptions);
  }
}
