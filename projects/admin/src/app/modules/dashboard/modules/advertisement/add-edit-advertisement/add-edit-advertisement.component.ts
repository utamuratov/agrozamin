import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'az-add-edit-advertisement',
  templateUrl: './add-edit-advertisement.component.html',
  styleUrls: ['./add-edit-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditAdvertisementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
