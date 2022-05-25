import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'az-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.less'],
})
export class AddAdvertisementComponent {
  /**
   *
   */
  id?: number;

  /**
   *
   */
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }
}
