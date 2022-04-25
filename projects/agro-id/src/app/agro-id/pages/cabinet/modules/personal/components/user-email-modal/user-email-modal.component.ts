import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationHelper } from 'ngx-az-core';
import { NgDestroy } from 'ngx-az-core';
import { ChangeEmailRequest } from '../../models/change-email.request';
import { PersonalService } from '../../services/personal.service';
import { BasePersonalModalComponent } from '../base-personal-modal/base-personal-modal.component';

@Component({
  selector: 'az-user-email-modal',
  templateUrl: './user-email-modal.component.html',
  styleUrls: ['./user-email-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEmailModalComponent
  extends BasePersonalModalComponent<string, ChangeEmailRequest>
  implements OnInit
{
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
  override ngOnInit() {
    super.ngOnInit();
  }

  /**
   *
   */
  protected override initForm(control: string | null | undefined) {
    this.form = this.fb.group({
      email: [
        control,
        [Validators.required, ValidationHelper.notChanged(control)],
      ],
      password: ['', Validators.required],
    });
  }

  /**
   *
   * @param request
   * @returns
   */
  protected override changeControl(request: ChangeEmailRequest) {
    return this.$data.changeEmail(request);
  }
}
