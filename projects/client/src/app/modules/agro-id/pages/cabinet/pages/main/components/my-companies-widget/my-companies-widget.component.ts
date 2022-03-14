import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-my-companies-widget',
  templateUrl: './my-companies-widget.component.html',
  styleUrls: ['./my-companies-widget.component.less']
})
export class MyCompaniesWidgetComponent implements OnInit {
  isVisible = false
  constructor() { }

  ngOnInit() {
  }

  handleCancel($event: boolean) {
    this.isVisible = $event
  }

  showModal() {
    this.isVisible = true
  }
}
