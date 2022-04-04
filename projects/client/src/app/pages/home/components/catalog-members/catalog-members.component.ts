import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-catalog-members',
  templateUrl: './catalog-members.component.html',
  styleUrls: ['./catalog-members.component.less'],
})
export class CatalogMembersComponent implements OnInit {
  partners = [
    [
      {
        title: ' Агротерра',
        subTitle: 'Производство семян  и саженцев',
        logo: '../../../../../assets/images/agrozamin/logo1.svg',
        images: [
          {
            img1:'https://www.deere.co.in/assets/images/region-1/products/tractors/d-series-tractors/john-deere-india-d-series-tractors.jpg',
            img2: '../../../../../assets/images/agrozamin/image2.jpg',
            img3:'../../../../../assets/images/agrozamin/image3.jpg',
            img4:'../../../../../assets/images/agrozamin/image4.jpg',
          }
        ]
      },
      {
        title: 'Сельхозпак',
        subTitle: 'овощи оптом',
        logo: '../../../../../assets/images/agrozamin/logo2.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image5.jpg',
            img2: '../../../../../assets/images/agrozamin/image6.jpg',
            img3:'../../../../../assets/images/agrozamin/image7.jpg',
            img4:'../../../../../assets/images/agrozamin/image8.jpg',
          }
        ]
      },
      {
        title: 'Пеленг Агро',
        subTitle: 'Агрооборудование и сельхозтехника',
        logo: '../../../../../assets/images/agrozamin/logo3.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image9.jpg',
            img2: '../../../../../assets/images/agrozamin/image10.jpg',
            img3:'../../../../../assets/images/agrozamin/image11.jpg',
            img4:'../../../../../assets/images/agrozamin/image12.jpg',
          }
        ]
      },
      {
        title: 'Agroinvestor',
        subTitle: 'Овощи и фрукты',
        logo: '../../../../../assets/images/agrozamin/logo4.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image13.jpg',
            img2: '../../../../../assets/images/agrozamin/image14.jpg',
            img3:'../../../../../assets/images/agrozamin/image15.jpg',
            img4:'../../../../../assets/images/agrozamin/image16.jpg',
          }
        ]
      },
    ],
    [
      {
        title: ' Агротерра',
        subTitle: 'Производство семян  и саженцев',
        logo: '../../../../../assets/images/agrozamin/logo1.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image1.jpg',
            img2: '../../../../../assets/images/agrozamin/image2.jpg',
            img3:'../../../../../assets/images/agrozamin/image3.jpg',
            img4:'../../../../../assets/images/agrozamin/image4.jpg',
          }
        ]
      },
      {
        title: 'Сельхозпак',
        subTitle: 'овощи оптом',
        logo: '../../../../../assets/images/agrozamin/logo2.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image5.jpg',
            img2: '../../../../../assets/images/agrozamin/image6.jpg',
            img3:'../../../../../assets/images/agrozamin/image7.jpg',
            img4:'../../../../../assets/images/agrozamin/image8.jpg',
          }
        ]
      },
      {
        title: 'Пеленг Агро',
        subTitle: 'Агрооборудование и сельхозтехника',
        logo: '../../../../../assets/images/agrozamin/logo3.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image9.jpg',
            img2: '../../../../../assets/images/agrozamin/image10.jpg',
            img3:'../../../../../assets/images/agrozamin/image11.jpg',
            img4:'../../../../../assets/images/agrozamin/image12.jpg',
          }
        ]
      },
      {
        title: 'Agroinvestor',
        subTitle: 'Овощи и фрукты',
        logo: '../../../../../assets/images/agrozamin/logo4.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image13.jpg',
            img2: '../../../../../assets/images/agrozamin/image14.jpg',
            img3:'../../../../../assets/images/agrozamin/image15.jpg',
            img4:'../../../../../assets/images/agrozamin/image16.jpg',
          }
        ]
      },
    ],
    [
      {
        title: ' Агротерра',
        subTitle: 'Производство семян  и саженцев',
        logo: '../../../../../assets/images/agrozamin/logo1.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image1.jpg',
            img2: '../../../../../assets/images/agrozamin/image2.jpg',
            img3:'../../../../../assets/images/agrozamin/image3.jpg',
            img4:'../../../../../assets/images/agrozamin/image4.jpg',
          }
        ]
      },
      {
        title: 'Сельхозпак',
        subTitle: 'овощи оптом',
        logo: '../../../../../assets/images/agrozamin/logo2.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image5.jpg',
            img2: '../../../../../assets/images/agrozamin/image6.jpg',
            img3:'../../../../../assets/images/agrozamin/image7.jpg',
            img4:'../../../../../assets/images/agrozamin/image8.jpg',
          }
        ]
      },
      {
        title: 'Пеленг Агро',
        subTitle: 'Агрооборудование и сельхозтехника',
        logo: '../../../../../assets/images/agrozamin/logo3.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image9.jpg',
            img2: '../../../../../assets/images/agrozamin/image10.jpg',
            img3:'../../../../../assets/images/agrozamin/image11.jpg',
            img4:'../../../../../assets/images/agrozamin/image12.jpg',
          }
        ]
      },
      {
        title: 'Agroinvestor',
        subTitle: 'Овощи и фрукты',
        logo: '../../../../../assets/images/agrozamin/logo4.svg',
        images: [
          {
            img1:'../../../../../assets/images/agrozamin/image13.jpg',
            img2: '../../../../../assets/images/agrozamin/image14.jpg',
            img3:'../../../../../assets/images/agrozamin/image15.jpg',
            img4:'../../../../../assets/images/agrozamin/image16.jpg',
          }
        ]
      },
    ],
   
  ];

  effect = 'scrollx';

  pre(e: NzCarouselComponent){
    e.pre()
  }
  next(e: NzCarouselComponent){
    e.next()
  }
  
  constructor() {}

  ngOnInit() {}
}
