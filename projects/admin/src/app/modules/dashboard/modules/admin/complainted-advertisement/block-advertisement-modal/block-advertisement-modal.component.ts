import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirty } from 'ngx-az-core';
import { BlockAdvertisement } from '../dto/block-advertisement.request';
import { ComplaintedUserService } from '../services/complainted-user.service';

@Component({
  selector: 'az-block-advertisement-modal',
  templateUrl: './block-advertisement-modal.component.html',
  styleUrls: ['./block-advertisement-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockAdvertisementModalComponent implements OnInit {
  /**
   *
   */
  @Input()
  advertisementId!: number;

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
  blocked = new EventEmitter<boolean>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder, private $data: ComplaintedUserService) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  initForm() {
    this.form = this.fb.group({
      comment: [null, Validators.required],
    });
  }

  /**
   *
   */
  block() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    const request: BlockAdvertisement = {
      announcement_id: this.advertisementId,
      comment: this.form.controls['comment'].value,
    };
    this.$data.block(request).subscribe((result) => {
      if (result.success) {
        this.blocked.emit(true);
        this.close();
      }
    });
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
  }
}
