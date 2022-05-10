import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.less']
})
export class FilterOptionsComponent implements OnInit {

  checked = true;

  constructor() { }

  ngOnInit(): void {
  }

}
