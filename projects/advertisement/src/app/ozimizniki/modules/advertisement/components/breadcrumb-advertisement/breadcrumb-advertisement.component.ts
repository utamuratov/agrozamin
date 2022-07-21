import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CategoryForBreadcrumb } from 'projects/advertisement/src/app/shared/models/category-for-breadcrumb.interface';

@Component({
  selector: 'az-breadcrumb-advertisement',
  templateUrl: './breadcrumb-advertisement.component.html',
  styleUrls: ['./breadcrumb-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbAdvertisementComponent extends Breadcrumb {
  /**
   *
   */
  @Input()
  categoriesForBreadcrumb!: CategoryForBreadcrumb[];

  /**
   *
   */
  @Input()
  showTitle = true;

  /**
   *
   */
  @Input()
  lastBC?: string;

  /**
   *
   * @param router
   * @param $category
   * @param cd
   */
  constructor(
    protected override router: Router,
    private route: ActivatedRoute
  ) {
    super(router);
  }

  /**
   *
   * @param sequence
   * @returns
   */
  navigateBySequence(sequence: string) {
    if (
      this.route.snapshot.params[
        AdvertisementConstants.ROUTER_PARAM_ADVERTISEMENT_ID
      ]
    ) {
      this.router.navigate(['../../', sequence], { relativeTo: this.route });
      return;
    }

    this.router.navigate(['../', sequence], { relativeTo: this.route });
  }
}
