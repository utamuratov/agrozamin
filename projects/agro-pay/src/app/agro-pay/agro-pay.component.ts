import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-agro-pay',
  templateUrl: './agro-pay.component.html',
  styleUrls: ['./agro-pay.component.less'],
})
export class AgroPayComponent implements OnInit {
  siderWidth!: string;
  isCollapsed = false;

  constructor() {}

  /**
   *
   */
  private clientWidth(): void {
    if (window.innerWidth > 992) {
      this.siderWidth = '323px';
    } else if (window.innerWidth <= 992 && window.innerWidth > 576) {
      this.siderWidth = '257px';
    } else if (window.innerWidth <= 576) {
      this.siderWidth = '100%';
    }
  }

  ngOnInit() {
    this.clientWidth();
  }

  onResize(size: any) {
    if (size.target.innerWidth < 992) {
      this.siderWidth = '257px';
    }

    if (size.target.innerWidth < 576) {
      this.siderWidth = '100%';
    }

    if (size.target.innerWidth > 992) {
      this.siderWidth = '323px';
    }
  }
}
