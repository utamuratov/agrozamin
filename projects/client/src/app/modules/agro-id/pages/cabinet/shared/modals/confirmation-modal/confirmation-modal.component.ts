import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseService } from 'ngx-az-core';
import { map, Observable, startWith } from 'rxjs';
import { ConfirmationFormComponent } from '../../../../../shared/confirmation-form/confirmation-form.component';

@Component({
  selector: 'az-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.less'],
})
export class ConfirmationModalComponent {
  /**
   *
   */
  @Input()
  public isVisible!: boolean;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Output()
  activationCodeSucceed = new EventEmitter();

  /**
   *
   */
  @Input()
  title!: string;

  /**
   *
   */
  @Input()
  phone?: string;

  /**
   *
   */
  @Input()
  email?: string;

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  isWaitingActivationCodeResponse$?: Observable<boolean>;

  /**
   *
   */
  constructor(private $baseService: BaseService) {}

  /**
   *
   * @param activationCode
   */
  sendActivationCodeToPhone(activationCode: string) {
    this.isWaitingResponse$ = this.$baseService
      .post('cabinet/phone-activation', {
        phone: this.phone,
        secure_code: activationCode,
      })
      .pipe(
        map((result) => {
          if (result.success) {
            this.activationCodeSucceed.emit();
            this.close();
          }

          return false;
        }),
        startWith(true)
      );
  }

  /**
   *
   */
  resendActivationCode(confirmationForm: ConfirmationFormComponent) {
    this.isWaitingActivationCodeResponse$ = this.$baseService
      .post('cabinet/resend-secure-code', { phone: this.phone })
      .pipe(
        map((result) => {
          if (result.success) {
            confirmationForm.startTimer();
          }

          return false;
        }),
        startWith(true)
      );
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
  }
}
