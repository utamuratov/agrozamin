import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.less'],
})
export class SellerInfoComponent implements OnInit {
  isOnline = true;

  constructor() {}

  ngOnInit(): void {}
}
