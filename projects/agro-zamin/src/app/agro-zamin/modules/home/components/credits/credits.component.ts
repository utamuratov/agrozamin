import { Component, OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

export interface Credits {
  title: string;
  img: string;
}

@Component({
  selector: 'az-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.less'],
})
export class CreditsComponent implements OnInit {
  credits: Credits[] = [
    {
      title: 'Кредит на покупку агротехники, 23% годовых',
      img: './assets/images/agrozamin/creditBanner2.jpg',
    },
    {
      title: 'Кредит на защиту растений',
      img: './assets/images/agrozamin/creditBanner1.jpg',
    },
    {
      title: 'Кредит на защиту растений',
      img: './assets/images/agrozamin/creditBanner1.jpg',
    },
    {
      title: 'Кредит на покупку агротехники, 23% годовых',
      img: './assets/images/agrozamin/creditBanner2.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
