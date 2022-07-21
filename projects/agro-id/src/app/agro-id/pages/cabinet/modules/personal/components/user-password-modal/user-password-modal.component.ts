import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { ChangePasswordRequest } from '../../models/change-password.request';
import { PersonalService } from '../../services/personal.service';
import { BasePersonalModalComponent } from '../base-personal-modal/base-personal-modal.component';

@Component({
  selector: 'az-user-password-modal',
  templateUrl: './user-password-modal.component.html',
  styleUrls: ['./user-password-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPasswordModalComponent
  extends BasePersonalModalComponent<string, ChangePasswordRequest>
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
    this.password = 'new_password';
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
      password: [control, Validators.required],
    });
    this.addPasswordAndConfrimationPasswordControls();
  }

  /**
   *
   */
  override doAfterSuccess() {
    this.close();
    this.init();
    this.isVisibleSuccessModal = true;
  }

  /**
   *
   * @param request
   * @returns
   */
  protected override changeControl(request: ChangePasswordRequest) {
    return this.$data.changePassword(request);
  }
}
