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
  private _isVisible = false;
  public get isVisible(): boolean {
    return this._isVisible;
  }
  @Input()
  public set isVisible(v: boolean) {
    this._isVisible = v;
    this.isWaitingResponse$ = undefined;
    this.isWaitingActivationCodeResponse$ = undefined;
  }

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
  @Input()
  password!: string;

  /**
   *
   */
  @Input()
  urlForSend = 'cabinet/phone-activation';

  /**
   *
   */
  @Input()
  urlForResend = 'cabinet/resend-secure-code';

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
  sendActivationCode(activationCode: string) {
    this.isWaitingResponse$ = this.$baseService
      .post(this.urlForSend, {
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
      .post(this.urlForResend, { phone: this.phone, password: this.password })
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
