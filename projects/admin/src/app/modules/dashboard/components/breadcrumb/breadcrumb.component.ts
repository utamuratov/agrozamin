import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Breadcrumb } from 'ngx-az-core';

@Component({
  selector: 'agro-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent extends Breadcrumb {}
