import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'az-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less'],
})
export class TagComponent implements OnInit {
  @Input() category!: string;
  constructor() { }

  ngOnInit() {
  }
}
