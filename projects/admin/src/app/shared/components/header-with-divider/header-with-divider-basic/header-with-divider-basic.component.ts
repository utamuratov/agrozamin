import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'az-header-with-divider-basic',
  templateUrl: './header-with-divider-basic.component.html',
})
export class HeaderWithDividerBasicComponent {
  /**
   *
   */
  @Input()
  title!: string;

  /**
   *
   */
  @Output()
  clickedAddEditButton = new EventEmitter();

  /**
   *
   */
  addEdit() {
    this.clickedAddEditButton.emit();
  }
}
