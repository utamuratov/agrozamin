import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NgDestroy } from 'ngx-az-core';
import { finalize, takeUntil } from 'rxjs';
import { RequestRole } from '../../../../dto/roles/request-role.interface';
import { Role } from '../../../../dto/roles/roles.interface';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'az-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.less'],
})
export class RoleModalComponent {
  /**
   *
   */
  @Output()
  isLoading = new EventEmitter<boolean>();

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  isVisible!: boolean;

  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input()
  editingData?: Role;

  /**
   *
   */
  @Input()
  actionList!: NzTreeNodeOptions[];

  /**
   *
   */
  isOkLoading = false;

  /**
   *
   * @param $data
   * @param $destroy
   */
  constructor(private $data: RolesService, private $destroy: NgDestroy) {}

  /**
   *
   * @param formAccess
   * @returns
   */
  private getControls(formAccess: string[]): number[] {
    const actions: number[] = [];
    formAccess.forEach((el: string) => {
      const splitted = el.split('-');
      if (splitted.length > 1) {
        actions.push(+splitted[1]);
      } else {
        const control = this.actionList.find((k) => k.key === el)?.children;
        control?.forEach((act) => {
          actions.push(+act.key.split('-')[1]);
        });
      }
    });
    return actions;
  }

  /**
   *
   * @returns
   */
  private formValues(): RequestRole {
    const controls = this.getControls(this.form.controls['actions'].value);
    const bodyRequest = {
      key: this.form.controls['key'].value,
      description: {
        ru: this.form.controls['ru'].value,
        uz_cyrl: this.form.controls['uz_cyrl'].value,
        uz_latn: this.form.controls['uz_latn'].value,
      },
      access: controls,
    };
    return bodyRequest;
  }

  /**
   *
   */
  private doAfterSuccess(): void {
    this.isOkLoading = false;
    this.isLoading.emit(true);
    this.close();
  }

  /**
   *
   */
  addRole(): void {
    this.isOkLoading = true;
    const bodyRequest = this.formValues();
    this.$data
      .add(bodyRequest)
      .pipe(
        takeUntil(this.$destroy),
        finalize(() => {
          this.isOkLoading = false;
        })
      )
      .subscribe(() => {
        this.doAfterSuccess();
        this.form.reset();
      });
  }

  /**
   *
   * @param id
   */
  editRole(id: number): void {
    this.isOkLoading = true;
    const bodyRequest = this.formValues();
    this.$data
      .update(id, bodyRequest)
      .pipe(
        takeUntil(this.$destroy),
        finalize(() => {
          this.isOkLoading = false;
        })
      )
      .subscribe(() => {
        this.doAfterSuccess();
      });
  }

  /**
   *
   * @returns
   */
  save(): void {
    if (this.editingData) {
      this.editRole(this.editingData.id);
      return;
    }
    this.addRole();
  }

  /**
   *
   */
  close(): void {
    this.isVisibleChange.emit(false);
    this.form.reset();
  }
}
