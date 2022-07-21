import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { SellerService } from '../../../cabinet/modules/favourite/services/seller.service';
import { SellerDetails } from '../../dto/seller-details.interface';
import { SellerInfo } from '../../dto/seller-info.interface';

@Component({
  selector: 'az-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellerInfoComponent {
  /**
   *
   */
  @Input()
  sellerDetails!: SellerDetails;

  /**
   *
   */
  constructor(private $seller: SellerService, private cd: ChangeDetectorRef) {}

  /**
   *
   * @param data
   */
  toggleFavourite(data: SellerInfo) {
    this.$seller.addRemoveFavorite(data.id).subscribe((result) => {
      if (result.success) {
        data.favorite = !data.favorite;
        this.cd.markForCheck();
      }
    });
  }
}
