import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter, FilterParameter } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';

interface ActiveFilter extends FilterParameter {
  name: string;
}

@Component({
  selector: 'az-advertisement-list-header',
  templateUrl: './advertisement-list-header.component.html',
  styleUrls: ['./advertisement-list-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListHeaderComponent {
  /**
   *
   */
  @Input()
  isInline!: boolean;

  /**
   *
   */
  private _filters!: Filter[];
  public get filters(): Filter[] {
    return this._filters;
  }
  @Input()
  public set filters(v: Filter[]) {
    if (v) {
      this._filters = v;
      this.activeFilters = this.getActiveFilters(v);
    }
  }

  /**
   *
   */
  @Output()
  isInlineChange = new EventEmitter<boolean>();

  /**
   *
   */
  activeFilters: ActiveFilter[] = [];

  /**
   *
   */
  @Output()
  sortedByPriceDescandingChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Output()
  sortedByDateDescandingChange = new EventEmitter<boolean>();

  /**
   *
   */

  isMapActive = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  /**
   *
   * @param filters
   * @returns
   */
  private getActiveFilters(filters: Filter[]) {
    const parameters: ActiveFilter[] = [];
    filters.forEach((filter) => {
      filter.parameters.forEach((parameter) => {
        if (parameter.checked) {
          parameters.push({ ...parameter, name: filter.name });
        }
      });
    });

    return parameters;
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
   * @param parameter
   */
  deleteFilter(parameter: ActiveFilter) {
    this.activeFilters = this.activeFilters.filter(
      (p) => p.filter_parameter_id !== parameter.filter_parameter_id
    );
    this.navigateWithNewQueryParams(parameter);
  }

  /**
   *
   * @param parameter
   */
  private navigateWithNewQueryParams(parameter: ActiveFilter) {
    let characteristics: string =
      this.route.snapshot.queryParams['characteristics'];
    const characteristic = `${parameter.filter_id}${AdvertisementConstants.SPLITTER_BETWEEN_FILTERID_AND_VALUE}${parameter.filter_parameter_id}`;
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
