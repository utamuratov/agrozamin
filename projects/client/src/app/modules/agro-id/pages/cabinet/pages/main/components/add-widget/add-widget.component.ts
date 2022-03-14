import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'az-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.less']
})
export class AddWidgetComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Output() isHide = new EventEmitter<boolean>()
  
  isConfirmLoading = false;

  constructor() {}
  ngOnInit() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isHide.emit(false)
  }
}
