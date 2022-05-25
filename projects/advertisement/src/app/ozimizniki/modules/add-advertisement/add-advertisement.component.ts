import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementEditResponse } from './add-edit-advertisement-full/dto/advertisement-edit.response';

@Component({
  selector: 'az-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.less'],
})
export class AddAdvertisementComponent {
  /**
   *
   */
  data?: AdvertisementEditResponse;

  /**
   *
   */
  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['advertisment'];
  }
}
