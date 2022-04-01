import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants, markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { Observable, takeUntil, tap } from 'rxjs';
import { AdminUsersService } from '../admin-users.service';
import { AdminUserBody } from '../models/admin-user.body';

@Component({
  selector: 'az-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditUserComponent {
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
  private _editingData?: AdminUserBody;
  @Input()
  public set editingData(v: AdminUserBody | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): AdminUserBody | undefined {
    return this._editingData;
  }

  /**
   *
   */
  @Output()
  modified = new EventEmitter();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  @Input()
  role$!: Observable<IdKeyDescription[]>;

  constructor(
    private fb: FormBuilder,
    private $adminUser: AdminUsersService,
    private $destroy: NgDestroy
  ) {}

  /**
   *
   */
  private init() {
    this.initForm(this.editingData);
  }

  /**
   *
   * @param model
   */
  initForm(model?: AdminUserBody) {
    this.form = this.fb.group({
      role: [model?.role, Validators.required],
      login: [model?.login, Validators.required],
      phone: [
        model?.phone ? model.phone % 1000000000 : null,
        Validators.required,
      ],
      f_name: [model?.f_name, Validators.required],
      l_name: [model?.l_name, Validators.required],
    });
  }

  /**
   *
   * @returns
   */
  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.form.getRawValue();
    request.phone = Constants.PREFIX_PHONENUMBER + request.phone;
    if (this.editingData?.id) {
      this.edit(this.editingData.id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   */
  private add(request: AdminUserBody) {
    this.$adminUser
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.closeAndInitForm();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private edit(id: number, request: AdminUserBody) {
    this.$adminUser
      .edit(id, request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.closeAndInitForm();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  private closeAndInitForm() {
    this.modified.emit();
    this.close();
    this.initForm();
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
  }
}
