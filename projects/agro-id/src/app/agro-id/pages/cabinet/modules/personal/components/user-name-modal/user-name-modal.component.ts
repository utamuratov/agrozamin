import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { ChangeUsernameRequest } from '../../models/change-username.request';
import { Profile } from '../../models/profile.interface';
import { PersonalService } from '../../services/personal.service';
import { BasePersonalModalComponent } from '../base-personal-modal/base-personal-modal.component';

@Component({
  selector: 'user-name-modal',
  templateUrl: './user-name-modal.component.html',
  styleUrls: ['./user-name-modal.component.less'],
})
export class UserNameModalComponent
  extends BasePersonalModalComponent<Profile, ChangeUsernameRequest>
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
  protected override initForm(
    control: ChangeUsernameRequest | null | undefined
  ) {
    this.form = this.fb.group({
      f_name: [control?.f_name, Validators.required],
      l_name: [control?.l_name, Validators.required],
    });
  }

  /**
   *
   */
  override doAfterSuccess() {
    this.close();
    this.doControlChangedSuccessfully();
  }

  /**
   *
   * @param controlKey
   * @returns
   */
  protected override getControlValue(): Profile | null {
    return {
      ...(this.control as Profile),
      f_name: this.form.get('f_name')?.value,
      l_name: this.form.get('l_name')?.value,
    };
  }

  /**
   *
   * @param request
   * @returns
   */
  protected override changeControl(request: ChangeUsernameRequest) {
    return this.$data.changeUserFullname(request);
  }
}
