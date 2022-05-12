import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'az-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.less'],
})
export class AddAdvertisementComponent implements OnInit {
  /**
   *
   */
  categoryId!: number;

  advSettings!: FormGroup;
  oferta = false;

  constructor() {}

  ngOnInit() {}

  submitForm() {}

  /**
   *
   */
  changeCategoryId(categoryId: number) {
    this.categoryId = categoryId;
  }
}
