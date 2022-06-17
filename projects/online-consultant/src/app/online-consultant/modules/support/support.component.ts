import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class SupportComponent implements OnInit {
  isClient = true;
  constructor() { }

  ngOnInit() {
  }

}
