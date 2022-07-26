import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateList } from '../../../../dto/interface/translate-list.interface';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { InterfaceService } from '../../services/interface.service';
import { takeUntil } from 'rxjs';
import { NgDestroy } from 'ngx-az-core';
import { InterfaceRequest } from '../../../../dto/interface/interface-request.interface';

export interface Key {
  [key: number]: number;
}

@Component({
  selector: 'az-interface-modal',
  templateUrl: './interface-modal.component.html',
  styleUrls: ['./interface-modal.component.less'],
})
export class InterfaceModalComponent {
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
  editingData?: TranslateList;

  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input() list: TransferItem[] = [];

  /**
   *
   */
  selectedProjects: number[] = [];

  /**
   *
   * @param $data
   * @param $destroy
   */
  constructor(private $data: InterfaceService, private $destroy: NgDestroy) {}

  /**
   *
   * @returns
   */
  private requestFields(): InterfaceRequest {
    return {
      key: this.form.value.key,
      text: {
        ru: this.form.value.ru,
        uz_cyrl: this.form.value.uz_cyrl,
        uz_latn: this.form.value.uz_latn,
      },
      project: {...this.selectedProjects},
      type: 1,
    };
  }

  /**
   *
   */
  private doAfterSuccess() {
    this.isLoading.emit(true);
    this.handleCancel();
  }

  /**
   *
   */
  addInterface() {
    const bodyRequest: InterfaceRequest = this.requestFields();
    this.$data
      .add(bodyRequest)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.doAfterSuccess();
      });
  }

  /**
   * 
   * @param id 
   */
  editInterface(id: number) {
    const bodyRequest: InterfaceRequest = this.requestFields();
    this.$data
      .edit(id, bodyRequest)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.doAfterSuccess();
      });
  }

  /**
   *
   * @returns
   */
  handleOk(): void {
    if (this.editingData) {
      this.editInterface(this.editingData.id);
      return;
    }
    this.addInterface();
  }

  /**
   *
   */
  handleCancel(): void {
    this.isVisibleChange.emit(false);
    this.form.reset();
    this.list.forEach((el, idx) => (this.list[idx].direction = 'left'));
  }

  /**
   *
   * @param ret
   */
  change(ret: any): void {
    if (ret.to === 'right') {
      ret.list.forEach((el: TransferItem) => {
        this.selectedProjects.push(el['key']);
      });
    }

    if (ret.to === 'left') {
      ret.list.forEach((el: TransferItem) => {
        this.selectedProjects = this.selectedProjects.filter(
          (id: number) => id !== el['key']
        );
      });
    }
  }
}
