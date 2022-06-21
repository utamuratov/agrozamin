import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdvertisementConstants } from '../../core/constants/advertisement.constants';
import { Advertisement } from '../../ozimizniki/modules/advertisement/dto/advertisement.interface';

@Component({
  selector: 'az-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  /**
   *
   */
  @Input()
  data!: Advertisement;

  /**
   *
   */
  @Input()
  isInline = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: REMOVE OR USE
  }

  /**
   *
   * @param id
   * @returns
   */
  navigateToDetails(id: number) {
    if (
      this.route.snapshot.params[
        AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID
      ]
    ) {
      this.router.navigate([id], { relativeTo: this.route });
      return;
    }

    this.router.navigate([this.data.category_id, id], {
      relativeTo: this.route,
    });
  }

  /**
   *
   * @param advertisement
   */
  toggleFavourite(advertisement: Advertisement) {
    advertisement.favorite = !advertisement.favorite;
  }
}
