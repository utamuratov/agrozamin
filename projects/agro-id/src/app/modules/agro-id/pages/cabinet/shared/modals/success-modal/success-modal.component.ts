import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'az-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.less'],
})
export class SuccessModalComponent {
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
  @Input()
  title!: string;

  /**
   *
   */
  @Input()
  bodyOne?: string;

  /**
   *
   */
  @Input()
  bodyTwo?: string;

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
  }
}
