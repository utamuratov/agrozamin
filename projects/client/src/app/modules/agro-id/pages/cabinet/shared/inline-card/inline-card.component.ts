import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'az-inline-card',
  templateUrl: './inline-card.component.html',
  styleUrls: ['./inline-card.component.less'],
})
export class InlineCardComponent implements OnInit {
  @Input()
  titleOne?: string;

  @Input()
  titleTwo?: string;

  @Input()
  titleThree?: string;

  @Input()
  avatar?: string;

  @Input()
  iconForAvatar = 'camera';

  @Input()
  isVisiblePopover?: boolean;

  @Input()
  hasThreeDots?: boolean;

  constructor() {}

  ngOnInit(): void {}

  showModal() {}
}
