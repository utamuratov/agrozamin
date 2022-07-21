import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridQuery, GridLogic } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { Category } from '../../dto/category.interface';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'az-seller-advertisements',
  templateUrl: './seller-advertisements.component.html',
  styleUrls: ['./seller-advertisements.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellerAdvertisementsComponent extends GridLogic implements OnInit {
  /**
   *
   */
  sellerId!: number;

  /**
   *
   */
  isInlineCard = false;

  /**
   *
   */
  visibleCategoryDrawer = false;

  /**
   *
   */
  @Input()
  categories!: Category[];

  /**
   *
   */
  categoryId!: number;

  /**
   *
   * @param $data
   * @param cd
   * @param route
   */
  constructor(
    protected override $data: SellerService,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    super($data, cd);
    this.sellerId =
      this.route.snapshot.params[AdvertisementConstants.ROUTER_PARAM_SELLER_ID];
  }

  /**
   *
   */
  override loadDataFromServer(query: GridQuery) {
    super.loadDataFromServer(query, `user/announcement/${this.sellerId}`);
  }

  /**
   *
   * @returns
   */
  override getQueryFilter() {
    return [{ key: 'category_id', value: [String(this.categoryId || '')] }];
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
  ngOnInit(): void {
    this.onInit();
  }

  /**
   *
   * @param categoryId
   */
  handleCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.closeCategoryDrawer();
    this.setQuery();
    this.loadData();
  }

  /**
   *
   */
  openCategoryDrawer(): void {
    this.visibleCategoryDrawer = true;
  }

  /**
   *
   */
  closeCategoryDrawer(): void {
    this.visibleCategoryDrawer = false;
  }
}
