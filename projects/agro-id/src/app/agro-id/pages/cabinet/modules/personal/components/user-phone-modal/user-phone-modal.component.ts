import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationHelper } from 'ngx-az-core';
import { Constants, NgDestroy } from 'ngx-az-core';
import { ChangePhoneRequest } from '../../models/change-phone.request';
import { PersonalService } from '../../services/personal.service';
import { BasePersonalModalComponent } from '../base-personal-modal/base-personal-modal.component';

@Component({
  selector: 'az-user-phone-modal',
  templateUrl: './user-phone-modal.component.html',
  styleUrls: ['./user-phone-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPhoneModalComponent
  extends BasePersonalModalComponent<number, ChangePhoneRequest>
  implements OnInit
{
  /**
   *
   */
  readonly PREFIX_PHONENUMBER = Constants.PREFIX_PHONENUMBER;

  /**
   *
   * @param fb
   * @param $data
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $data: PersonalService,
    protected override $destroy: NgDestroy
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   */
  protected override initForm(control: number | null | undefined) {
    const phone = control ? control % 1000000000 : null;
    this.form = this.fb.group({
      phone: [phone, [Validators.required, ValidationHelper.notChanged(phone)]],
      password: ['', Validators.required],
    });
  }

  /**
   *
   * @returns
   */
  protected override getRequest() {
    const request = this.form.getRawValue();
    request.phone = this.PREFIX_PHONENUMBER + request.phone;
    return request;
  }

  /**
   *
   * @param request
   * @returns
   */
  protected override changeControl(request: ChangePhoneRequest) {
    return this.$data.changePhone(request);
  }

  /**
   *
   * @param controlKey
   * @returns
   */
  protected override getControlValue(controlKey: string): number | null {
    return Number(
      this.PREFIX_PHONENUMBER + this.form.controls[controlKey].value
    );
  }
}
