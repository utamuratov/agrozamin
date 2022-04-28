import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'az-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  advSettings!: FormGroup;
  radioValue = '1';
  constructor() { }

  ngOnInit() {
  }

  submitForm() {}

}
