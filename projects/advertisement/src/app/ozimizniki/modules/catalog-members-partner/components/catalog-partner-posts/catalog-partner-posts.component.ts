import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridQuery } from 'ngx-az-core';
import { GridLogic } from 'projects/advertisement/src/app/shared/grid/grid-logic/grid-logic';
import { cat } from '../../../advertisement/pages/advertisement-list-by-category/subcategory';
import { SellerService } from '../../services/seller.service';
import { partnerProd } from './partnerData';

@Component({
  selector: 'az-catalog-partner-posts',
  templateUrl: './catalog-partner-posts.component.html',
  styleUrls: ['./catalog-partner-posts.component.less'],
})
export class CatalogPartnerPostsComponent extends GridLogic implements OnInit {
  /**
   *
   */
  sellerId!: number;

  /**
   *
   */
  isInlineCard = false;

  categories = cat;
  id = 1;
  isActive = false;
  partnerProducts = partnerProd;
  @Input() categoryId!: number;
  products = partnerProd;
  cardSizeIndex = 6;

  visible = false;

  constructor(
    protected override $data: SellerService,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    super($data, cd);
    this.sellerId = this.route.snapshot.params['sellerId'];
  }

  /**
   *
   */
  override loadDataFromServer(query: GridQuery) {
    super.loadDataFromServer(query, `user/announcement/${this.sellerId}`);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.onInit();
  }

  handleCategory(id: number) {
    this.id = id;
  }

  isGrid() {
    this.isActive = false;
  }

  isList() {
    this.isActive = true;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
