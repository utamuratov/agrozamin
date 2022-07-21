import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-my-cards-widget',
  templateUrl: './my-cards-widget.component.html',
  styleUrls: ['./my-cards-widget.component.less']
})
export class MyCardsWidgetComponent implements OnInit {
  openModal = false
  constructor() { }

  ngOnInit() {
  }

  showModal(): void {    
    this.openModal = true
  }

  closeModal($event: boolean): void {
    this.openModal = $event
  }

}
