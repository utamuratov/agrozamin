import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirty } from 'ngx-az-core';
import { Observable } from 'rxjs';
import { RejectReasonService } from '../../admin/reject-reason/service/reject-reason.service';
import { RejectReason } from '../dto/reject-reason.interface';

@Component({
  selector: 'az-reject-reason-modal',
  templateUrl: './reject-reason-modal.component.html',
  styleUrls: ['./reject-reason-modal.component.less'],
})
export class RejectReasonModalComponent implements OnInit {
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
  @Output()
  rejectReasonId = new EventEmitter<number>();

  /**
   *
   */
  rejectReason$!: Observable<RejectReason[]>;

  /**
   *
   */
  rejectReason!: number;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param $rejectReason
   */
  constructor(
    private $rejectReason: RejectReasonService,
    private fb: FormBuilder
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
    this.getRejectReasons();
  }

  /**
   *
   */
  initForm() {
    this.form = this.fb.group({
      rejectReason: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  getRejectReasons() {
    this.rejectReason$ = this.$rejectReason.getList();
  }

  /**
   *
   */
  reject(rejectReasonId: number) {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    this.rejectReasonId.emit(rejectReasonId);
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
  }
}
