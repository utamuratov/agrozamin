import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { map, Observable, takeUntil } from 'rxjs';
import { AccessControlService } from '../access-control.service';
import { AccessControlAction } from '../models/access-control-action.interface';
import { AccessControl } from '../models/access-control.interface';
import { AccessControlResponse } from '../models/access-control.response';

@Component({
  selector: 'az-add-edit-access-control',
  templateUrl: './add-edit-access-control.component.html',
  styleUrls: ['./add-edit-access-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAccessControlComponent extends BaseAddEditComponent<
  AccessControlResponse,
  AccessControl,
  AccessControlResponse<number>
> {
  /**
   *
   */
  accessAction$!: Observable<AccessControlAction[]>;

  /**
   *
   * @param fb
   * @param $accessControl
   */
  constructor(
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected override $data: AccessControlService
  ) {
    super(fb, $data, $destroy);
    this.loadAccessAction();
  }

  /**
   *
   * @param model
   */
  override initForm(model?: AccessControlResponse<number>) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      url: [model?.url],
      description: this.fb.group({}),
      actions: [model?.actions, Validators.required],
    });
  }

  /**
   *
   */
  loadAccessAction() {
    this.accessAction$ = this.$data
      .getActions()
      .pipe(takeUntil(this.$destroy))
      .pipe(map((w) => w.data));
  }
}
