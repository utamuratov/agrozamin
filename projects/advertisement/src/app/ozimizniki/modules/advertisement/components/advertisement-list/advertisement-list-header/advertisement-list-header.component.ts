import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter, FilterParameter } from 'ngx-az-core';

@Component({
  selector: 'az-advertisement-list-header',
  templateUrl: './advertisement-list-header.component.html',
  styleUrls: ['./advertisement-list-header.component.less'],
})
export class AdvertisementListHeaderComponent implements OnInit {
  /**
   *
   */
  @Input()
  isInline!: boolean;

  /**
   *
   */
  @Input()
  filters?: Filter[];

  /**
   *
   */
  @Output()
  isInlineChange = new EventEmitter<boolean>();

  /**
   *
   */
  sortedByPriceDescanding!: boolean;

  /**
   *
   */
  @Output()
  sortedByPriceDescandingChange = new EventEmitter<boolean>();

  /**
   *
   */
  sortedByDateDescanding!: boolean;

  /**
   *
   */
  @Output()
  sortedByDateDescandingChange = new EventEmitter<boolean>();

  /**
   *
   */

  isMapActive = false;
  date = false;
  filterParams = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.snapshot.params['categoryId']) {
      this.filterParams = true;
    }
  }

  ngOnInit() {
    // TODO
  }

  /**
   *
   */
  toggleCardStyle() {
    this.isInline = !this.isInline;
    this.isInlineChange.emit(this.isInline);
  }

  /**
   *
   */
  toggleSortByPrice() {
    this.sortedByDateDescanding = false;
    this.sortedByPriceDescanding = !this.sortedByPriceDescanding;
    this.sortedByPriceDescandingChange.emit(this.sortedByPriceDescanding);
  }

  /**
   *
   */
  toggleSortByDate() {
    this.sortedByPriceDescanding = false;
    this.sortedByDateDescanding = !this.sortedByDateDescanding;
    this.sortedByDateDescandingChange.emit(this.sortedByDateDescanding);
  }

  /**
   *
   * @param parameter
   */
  deleteParam(parameter: FilterParameter) {
    parameter.checked = false;
    this.navigateWithNewQueryParams(parameter);
  }

  /**
   *
   * @param parameter
   */
  private navigateWithNewQueryParams(parameter: FilterParameter) {
    let characteristics: string =
      this.route.snapshot.queryParams['characteristics'];
    const characteristic = `${parameter.filter_id}_${parameter.filter_parameter_id}`;
    characteristics = characteristics.replace(`;${characteristic}`, '');
    characteristics = characteristics.replace(`${characteristic};`, '');
    characteristics = characteristics.replace(`${characteristic}`, '');

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { characteristics },
    });
  }

  isMap() {
    this.isMapActive = !this.isMapActive;
  }
}
