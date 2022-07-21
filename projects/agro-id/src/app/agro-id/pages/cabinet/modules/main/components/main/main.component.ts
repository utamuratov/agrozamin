import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  isVisible = false;
  constructor() {}

  ngOnInit() {}

  addNewWidget() {
    this.isVisible = true;
  }

  closeModal($event: boolean): void {
    this.isVisible = $event
  }
}
