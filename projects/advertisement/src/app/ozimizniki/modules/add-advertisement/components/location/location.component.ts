import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
  selectedValue = null;

  constructor() {}

  ngOnInit(): void {}
}
