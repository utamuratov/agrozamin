import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerDetails } from './dto/seller-details.interface';

@Component({
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellerComponent {
  /**
   *
   */
  data!: SellerDetails;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['sellerDetails'];
  }
}
