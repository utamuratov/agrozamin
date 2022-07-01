import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SellerDetails } from '../../dto/seller-details.interface';

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

  toggleFavourite(data: any) {
    // TODO
  }
}
