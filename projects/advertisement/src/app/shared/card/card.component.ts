import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdvertisementConstants } from '../../core/constants/advertisement.constants';
import { Advertisement } from '../../ozimizniki/modules/advertisement/dto/advertisement.interface';
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'az-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FavouriteService],
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private $favourite: FavouriteService,
    private cd: ChangeDetectorRef
  ) {}

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
        AdvertisementConstants.ROUTER_PARAM_ADVERTISEMENT_ID
      ]
    ) {
      this.router.navigate(['../', id], { relativeTo: this.route });
      return;
    }

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
    this.$favourite
      .addDeleteFavourite({ announcement_id: advertisement.id })
      .subscribe((result) => {
        if (result.success) {
          advertisement.favorite = !advertisement.favorite;
          this.cd.markForCheck();
        }
      });
  }
}
