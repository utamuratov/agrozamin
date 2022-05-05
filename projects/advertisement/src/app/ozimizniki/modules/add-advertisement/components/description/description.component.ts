import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
