import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Success {
  isVisible: boolean;
  type: string;
  description: string
}

@Component({
  selector: 'az-success-changes',
  templateUrl: './success-changes.component.html',
  styleUrls: ['./success-changes.component.less'],
})
export class SuccessChangesComponent implements OnInit {
  @Input() config!: Success;
  @Output() handleSuccess = new EventEmitter<boolean>()
  
  // isVisible = true;

  constructor() {}

  ngOnInit() {}

  showModal(): void {
    this.config.isVisible = true;
  }

  handleOk(): void {
    console.log('OK');
    this.handleSuccess.emit(false)
  }

  handleCancel(): void {
    this.config.isVisible = false;
  }
}
