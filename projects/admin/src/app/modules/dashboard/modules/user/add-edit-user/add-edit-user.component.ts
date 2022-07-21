import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Constants, NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { Observable } from 'rxjs';
import { AdminUsersService } from '../services/admin-users.service';
import { AdminUserBody } from '../models/admin-user.body';
import { AdminUserResponse } from '../models/admin-user.response';

@Component({
  selector: 'az-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditUserComponent extends BaseAddEditComponent<
  AdminUserResponse,
  AdminUserBody,
  AdminUserBody
> {
  /**
   *
   */
  @Input()
  public isAdminUsers!: boolean;

  /**
   *
   */
  @Input()
  role$!: Observable<IdKeyDescription[]>;

  constructor(
    protected override fb: FormBuilder,
    protected override $data: AdminUsersService,
    protected override $destroy: NgDestroy
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: AdminUserBody) {
    this.form = this.fb.group({
      login: [model?.login, Validators.required],
      phone: [
        model?.phone ? model.phone % 1000000000 : null,
        Validators.required,
      ],
      f_name: [model?.f_name, Validators.required],
      l_name: [model?.l_name, Validators.required],
      description: [model?.description],
    });

    if (this.isAdminUsers) {
      this.form.addControl(
        'role',
        new FormControl(model?.role, Validators.required)
      );
    }
  }

  /**
   *
   * @returns
   */
  override getRequest() {
    const request = this.form.getRawValue();
    request.phone = Constants.PREFIX_PHONENUMBER + request.phone;
    return request;
  }
}
