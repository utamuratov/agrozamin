import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AdvertisementStatus,
  IdName,
  NgDestroy,
  Constants,
  GridLogic,
} from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { prefixPath } from 'projects/advertisement/src/app/core/utilits/advertisement.utilits';
import { FavouriteService } from 'projects/advertisement/src/app/shared/services/favourite.service';
import { takeUntil } from 'rxjs';
import { Advertisement } from './dto/advertisment.interface';
import { AdvertisementService } from './services/advertisment.service';

@Component({
  selector: 'az-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.less'],
  providers: [AdvertisementService],
})
export class AdvertisementComponent extends GridLogic<Advertisement> {
  /**
   *
   */
  status!: AdvertisementStatus;

  /**
   *
   */
  categoryId!: number;

  /**
   *
   */
  advertisementTypeId!: number;

  /**
   *
   */
  AdvertisementStatus = AdvertisementStatus;

  /**
   *
   */
  categories: IdName[] = [];

  /**
   *
   */
  advertisementTypes: IdName[] = [];

  /**
   *
   * @param $advertisement
   * @param route
   */
  constructor(
    protected override $data: AdvertisementService,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private $destroy: NgDestroy,
    private $favourite: FavouriteService
  ) {
    super($data, cd);
    this.getFilterData();

    this.route.params.pipe(takeUntil(this.$destroy)).subscribe((params) => {
      this.status = +params['status'];
      this.initQuery();
      this.data = this.route.snapshot.data['advertisment'];
    });
  }

  /**
   *
   * @returns
   */
  protected override getQueryFilter() {
    return [
      this.status === AdvertisementStatus.STATUS_ARCHIVED
        ? {
            key: 'archive',
            value: [
              String(this.status === AdvertisementStatus.STATUS_ARCHIVED),
            ],
          }
        : { key: 'status', value: [String(this.status || '')] },
      { key: 'category_id', value: [String(this.categoryId || '')] },
      {
        key: 'type_id',
        value: [String(this.advertisementTypeId || '')],
      },
    ];
  }

  /**
   *
   */
  onChangeCategoryFilter() {
    this.setQuery();
    this.loadData();
  }

  /**
   *
   */
  protected override loadData(): void {
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  onChangeAdvertisementTypeFilter() {
    this.initQuery();
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  getFilterData() {
    this.$data.getFilterData().subscribe((result) => {
      if (result.success) {
        this.categories = result.data.categories;
        this.advertisementTypes = result.data.announcement_types;
      }
    });
  }

  /**
   *
   */
  navigateToDetails(advertisement: Advertisement) {
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
      advertisement.category_id,
      advertisement.id,
    ]);
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

  /**
   *
   */
  addArchive(advertisementId: number) {
    this.$data.addArchive(advertisementId).subscribe((result) => {
      if (result.data) {
        this.loadData();
      }
    });
  }

  /**
   *
   */
  unArchive(advertisementId: number) {
    this.$data.unArchive(advertisementId).subscribe((result) => {
      if (result.data) {
        this.loadData();
      }
    });
  }
}
