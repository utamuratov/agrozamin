import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Breadcrumb } from 'ngx-az-core';

@Component({
  selector: 'az-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent extends Breadcrumb {
  /**
   *
   */
  @Input()
  title?: string;
}
