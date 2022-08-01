import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { takeUntil } from 'rxjs';
import { CreateUser } from '../../interface';
import { AgroIdUsersService } from '../../services/agro-id-users.service';

@Component({
  selector: 'az-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.less'],
})
export class UsersModalComponent {
  /**
   * 
   */
  @Input()
  isVisible!: boolean;

  /**
   * 
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   * 
   */
  @Input() form!: FormGroup;

  /**
   * 
   */
  @Output()
  isLoading = new EventEmitter<boolean>();

  /**
   * 
   * @param data$ 
   * @param destroy$ 
   */
  constructor(private data$: AgroIdUsersService, private destroy$: NgDestroy) {}

  /**
   * 
   * @returns 
   */
  private requestBody(): CreateUser {
    return {
      login: this.form.value.login,
      phone: +('998' + this.form.value.phone),
      f_name: this.form.value.f_name,
      l_name: this.form.value.l_name,
      description: this.form.value.description,
    };
  }

  /**
   * 
   * @returns 
   */
  private addUser() {
    if (this.form.invalid) {
      return;
    }

    const requestBody: CreateUser = this.requestBody();
    this.data$
      .add(requestBody)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isLoading.emit(true);
        this.handleCancel();
      });
  }

  /**
   * 
   */
  handleCancel() {
    this.isVisibleChange.emit(false);
    this.form.reset();
  }

  /**
   * 
   */
  handleOk() {
    this.addUser();
  }
}
