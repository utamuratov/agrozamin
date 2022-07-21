import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.less']
})
export class CabinetComponent implements OnInit {
  
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      name: 'This is panel header 2'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
