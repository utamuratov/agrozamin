import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less']
})
export class PartnersComponent implements OnInit {

  effect = 'scrollx';

  partners = [
    [
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo1.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo2.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo3.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo4.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo5.svg",
      }
    ],
    [
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo1.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo2.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo3.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo4.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo5.svg",
      }
    ],
    [
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo1.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo2.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo3.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo4.svg",
      },
      {
        img1:"../../../../../assets/images/agrozamin/partners-logo5.svg",
      }
    ]
  ]

  constructor() { }

  ngOnInit() {
  }

  pre(e: NzCarouselComponent){
    e.pre()
  }
  next(e: NzCarouselComponent){
    e.next()
  }

}
