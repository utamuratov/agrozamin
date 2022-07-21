import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  BaseResponse,
  Constants,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { PasswordAndConfirmationPassword } from 'projects/agro-id/src/app/agro-id/shared/password-and-confirmation-password';
import { map, Observable, of, startWith } from 'rxjs';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'az-base-personal-modal',
  template: '',
})
export class BasePersonalModalComponent<TControl, TRequest>
  extends PasswordAndConfirmationPassword
  implements OnInit
{
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
    if (this.isWaitingResponse$) {
      this.isWaitingResponse$ = undefined;
    }
  }

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  control?: TControl | null;

  /**
   *
   */
  @Output()
  controlChange = new EventEmitter<TControl>();

  /**
   *
   */
  isVisibleSuccessModal = false;

  /**
   *
   */
  isVisibleConfirmationModal = false;

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  readonly ERROR_MESSAGE_FROM_SERVER = Constants.ERROR_MESSAGE_FROM_SERVER;

  /**
   *
   * @param fb
   * @param $data
   */
  constructor(
    protected fb: FormBuilder,
    protected $data: PersonalService,
    protected $destroy: NgDestroy
  ) {
    super($destroy);
  }

  /**
   *
   */
  ngOnInit() {
    this.init();
  }

  /**
   *
   */
  protected init() {
    this.initForm(this.control);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected initForm(control: TControl | null | undefined) {
    // INITIALIZE FORM FROM EXTENDED COMPONENT
  }

  /**
   *
   */
  public submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    const request = this.getRequest();
    this.isWaitingResponse$ = this.getWaitingResponse(request);
  }

  protected getRequest() {
    return this.form.getRawValue();
  }

  /**
   *
   */
  private getWaitingResponse(request: TRequest) {
    return this.changeControl(request).pipe(
      map((result) => {
        if (result.success) {
          this.doAfterSuccess();
        } else {
          result.error?.forEach((error) => {
            const control = this.form.get(error.field);
            if (control) {
              control.setErrors({
                [Constants.ERROR_MESSAGE_FROM_SERVER]: error,
              });
            }
          });
        }

        return false;
      }),
      startWith(true)
    );
  }

  /**
   *
   */
  protected doAfterSuccess() {
    this.close();
    this.isVisibleConfirmationModal = true;
  }

  /**
   *
   * @param request
   * @returns
   */
  protected changeControl(request: TRequest) {
    return of({} as BaseResponse);
  }

  /**
   *
   */
  public doControlChangedSuccessfully(controlKey?: string) {
    this.control = this.getControlValue(controlKey);
    this.controlChange.emit(this.control as TControl);
    this.init();
    this.isVisibleSuccessModal = true;
  }

  /**
   *
   * @param controlKey
   * @returns
   */
  protected getControlValue(controlKey?: string): TControl | null {
    if (controlKey) return this.form.controls[controlKey].value;
    return null;
  }

  /**
   *
   */
  public close() {
    this.isVisibleChange.emit(false);
  }
}
