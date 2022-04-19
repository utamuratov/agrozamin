import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirty } from 'ngx-az-core';
import { map, Observable, startWith } from 'rxjs';
import { ChangeEmailRequest } from '../../models/change-email.request';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'az-user-email-modal',
  templateUrl: './user-email-modal.component.html',
  styleUrls: ['./user-email-modal.component.less'],
})
export class UserEmailModalComponent implements OnInit {
  /**
   *
   */
  @Input() isVisible = false;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input() email!: string | null;

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  form!: FormGroup;

  constructor(private fb: FormBuilder, private $data: PersonalService) {}

  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      email: [this.email, [Validators.required]],
      password: ['', Validators.required],
    });
  }

  /**
   *
   */
  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    const request = this.form.getRawValue();
    this.changeEmail(request);
  }

  /**
   *
   */
  private changeEmail(request: ChangeEmailRequest) {
    this.isWaitingResponse$ = this.$data.changeEmail(request).pipe(
      map((result) => {
        if (result.success) {
          this.close();
        }

        return false;
      }),
      startWith(true)
    );
  }

  close() {
    this.isVisibleChange.emit(false);
  }
}
