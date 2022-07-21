import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './favourite-filters.component.html',
  styleUrls: ['./favourite-filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteFiltersComponent implements OnInit {
  checked = true;
  checked1 = true;

  constructor() {}

  ngOnInit(): void {}
}
