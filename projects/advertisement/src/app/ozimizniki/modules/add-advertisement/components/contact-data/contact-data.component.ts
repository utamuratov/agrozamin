import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDataComponent implements OnInit {
  radioValue = 'A';
  constructor() {}

  ngOnInit(): void {}
}
