import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NgDestroy } from 'ngx-az-core';
import { takeUntil } from 'rxjs';
import { BusinessCardResponse } from '../../models/business-card.response';
import { BusinessCardService } from '../../services/business-card.service';

@Component({
  templateUrl: './business-card.page.html',
  styleUrls: ['./business-card.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessCardPage implements OnInit {
  /**
   *
   */
  isVisibleAddEditModal = false;

  /**
   *
   */
  isVisibleSuccessModal = false;

  /**
   *
   */
  isVisibleConfirmationModal = false;

  /**
   *
   */
  editingData?: BusinessCardResponse;

  /**
   *
   */
  data: BusinessCardResponse[] = [];

  /**
   *
   */
  phoneNumberForSendingActivationCode!: string;

  constructor(
    private $businessCard: BusinessCardService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.$businessCard
      .getAll()
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        // if (response.success) {
        this.data = response.data;
        this.cd.markForCheck();
        // }
      });
  }

  /**
   *
   * @param id
   */
  delete(id: number): void {
    this.$businessCard.delete(id).subscribe((result) => {
      if (result.success) {
        this.data = this.data.filter((businessCard) => businessCard.id !== id);
        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: BusinessCardResponse) {
    if (editingData) {
      editingData.isVisiblePopover = false;
    }
    this.editingData = editingData;
    this.isVisibleAddEditModal = true;
  }

  /**
   *
   */
  modifiedData(phoneNumber: string) {
    this.phoneNumberForSendingActivationCode = phoneNumber;
    this.isVisibleConfirmationModal = true;
  }
}
