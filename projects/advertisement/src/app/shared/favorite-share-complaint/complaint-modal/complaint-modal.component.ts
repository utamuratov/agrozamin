import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComplaintReuqest } from '../dto/complaint.request.interface';
import { ComplaintCategoryResponse } from '../dto/complaint.response';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'az-complaint-modal',
  templateUrl: './complaint-modal.component.html',
  styleUrls: ['./complaint-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintModalComponent implements OnInit {
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
  form!: FormGroup;

  /**
   *
   */
  @Input()
  complaintCategories!: ComplaintCategoryResponse[] | null;

  /**
   *
   * @param fb
   * @param $complement
   */
  constructor(private fb: FormBuilder, private $complement: ComplaintService) {}

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      complaint_id: [null, Validators.required],
      comment: [null],
    });
  }

  /**
   *
   * @param request
   */
  private complaint(request: ComplaintReuqest) {
    this.$complement.complaint(request).subscribe((result) => {
      if (result.success) {
        this.close();
      }
    });
  }

  /**
   *
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
  }

  /**
   *
   * @param advertisementId
   * @param complaintCategoryId
   */
  sendToComplaint() {
    const request: ComplaintReuqest = {
      announcement_id: this.advertisementId,
      ...this.form.getRawValue(),
    };
    this.complaint(request);
  }
}
