import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
