import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgDestroy } from 'ngx-az-core';
import { takeUntil } from 'rxjs';
import { RegionResponse } from '../../../../dto/region.response';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'az-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
export class ModalComponent {
  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Output()
  isLoading = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  isVisible!: boolean;

  /**
   *
   */
  @Input()
  editingData?: RegionResponse;

  /**
   *
   */
  @Input()
  regionForm!: FormGroup;

  /**
   *
   */
  isOkLoading = false;

  /**
   *
   * @param $data
   */
  constructor(private $data: RegionService, private $destroy: NgDestroy) {}

  /**
   *
   */
  private doAfterSuccess() {
    this.isOkLoading = false;
    this.isLoading.emit(true);
    this.close();
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
    this.regionForm.reset();
  }

  /**
   *
   */
  addRegion(): void {
    this.isOkLoading = true;
    this.$data
      .add({ name: this.regionForm.value })
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.regionForm.reset();
        this.doAfterSuccess();
      });
  }

  /**
   *
   * @param id
   */
  editRegion(id: number) {
    this.isOkLoading = true;
    this.$data
      .update(id, { name: this.regionForm.value })
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.doAfterSuccess();
      });
  }

  /**
   *
   * @returns
   */
  save() {
    if (this.editingData) {
      this.editRegion(this.editingData.id);
      return;
    }
    this.addRegion();
  }
}
