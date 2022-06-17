import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map, Observable } from 'rxjs';
import { AdvertisementDetails } from '../../dto/advertisement-details.interface';
import { AdvertisementService } from '../../services/advertisement.service';

@Component({
  templateUrl: './advertisement-details.page.html',
  styleUrls: ['./advertisement-details.page.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementDetailsPage implements OnInit {
  /**
   *
   */
  data!: AdvertisementDetails;

  imgList = [
    {
      id: 1,
      image:
        'https://www.deere.ru/assets/images/region-2/products/combines/s440/r3g000446_lsc_large_large_6884f826c816a4af69f6ab0b87d16aefa9a5d553.jpg',
    },
    {
      id: 2,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/1f/Claas-Lexion-570-2.jpg',
    },
    {
      id: 3,
      image:
        'https://www.deere.ru/assets/images/region-2/products/combines//0_r2g015764_mod_lsc_large_large_1cfc0a5cf1072dfaaa722a89dd94b2f1d4c75c3c.jpg',
    },
    {
      id: 4,
      image:
        'https://www.deere.ru/assets/images/region-2/products/cotton-harvesting/r4d058464-large.jpg',
    },
    {
      id: 5,
      image:
        'https://www.truck1-ua.com/img/auto/XXL/7663/7663_3590727621494.jpg',
    },
  ];

  array = [1, 2, 3, 4];

  activeSlide = 0;
  mapVisible = false;
  textAreaCommend!: string;

  constructor(
    private route: ActivatedRoute,
    private $advertisement: AdvertisementService
  ) {
    this.data = this.route.snapshot.data['advertisment'];
  }

  ngOnInit() {
    // TODO
  }

  next(e: NzCarouselComponent) {
    e.next();
  }

  pre(e: NzCarouselComponent) {
    e.pre();
  }

  getIndex(index: any, e: NzCarouselComponent) {
    this.activeSlide = index;
    e.goTo(index);
  }

  handleActiveSlide(event: any) {
    if (event === 5) {
      this.activeSlide = 0;
    } else {
      this.activeSlide = event;
    }
  }
}
