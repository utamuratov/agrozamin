import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.less']
})
export class SocialLinksComponent implements OnInit {
  @Input()
  position!: boolean;

  constructor() { }

  ngOnInit() {
  }

}
