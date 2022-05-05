import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements OnInit {
  priceCheckbox = false;
  radioValueTrade = 'no';
  constructor() {}

  ngOnInit(): void {}
}
