import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgDestroy, ValidationHelper } from 'ngx-az-core';
import { ChangeLoginRequest } from '../../models/change-login.request';
import { PersonalService } from '../../services/personal.service';
import { BasePersonalModalComponent } from '../base-personal-modal/base-personal-modal.component';

@Component({
  selector: 'az-user-login-modal',
  templateUrl: './user-login-modal.component.html',
  styleUrls: ['./user-login-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginModalComponent
  extends BasePersonalModalComponent<string, ChangeLoginRequest>
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
      login: [
        control,
        [Validators.required, ValidationHelper.notChanged(control)],
      ],
      password: ['', Validators.required],
    });
  }

  /**
   *
   */
  override doAfterSuccess() {
    this.close();
    this.doControlChangedSuccessfully('login');
  }

  /**
   *
   * @param request
   * @returns
   */
  protected override changeControl(request: ChangeLoginRequest) {
    return this.$data.changeLogin(request);
  }
}
