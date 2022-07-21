import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Credits {
  title: string;
  img: string;
}

@Component({
  selector: 'az-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditsComponent {
  credits: Credits[] = [
    {
      title: 'Кредит на покупку агротехники, 23% годовых',
      img: './assets/images/creditBanner2.jpg',
    },
    {
      title: 'Кредит на защиту растений',
      img: './assets/images/creditBanner1.jpg',
    },
    {
      title: 'Кредит на защиту растений',
      img: './assets/images/creditBanner1.jpg',
    },
    {
      title: 'Кредит на покупку агротехники, 23% годовых',
      img: './assets/images/creditBanner2.jpg',
    },
  ];
}
