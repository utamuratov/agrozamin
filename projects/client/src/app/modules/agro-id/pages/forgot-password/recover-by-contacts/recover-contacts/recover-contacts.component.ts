import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';
import { RecoverByContactsStep } from 'projects/client/src/app/core/enums/recover-by-contacts-step.enum';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';

@Component({
  selector: 'recover-contacts',
  templateUrl: './recover-contacts.component.html',
  styleUrls: ['./recover-contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverContactsComponent implements OnInit {
  /*
   */
  @Output()
  changeStep = new EventEmitter<RecoverByContactsStep>();

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
    this.changeStep.emit(RecoverByContactsStep.Confirmation);
  }

  /**
   *
   * @param loginType
   */
  onChangedLoginType(loginType: LoginType) {
    console.log(loginType);
  }
}
