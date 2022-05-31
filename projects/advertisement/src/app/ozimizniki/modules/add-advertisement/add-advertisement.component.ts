import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDestroy } from 'ngx-az-core';
import { AddEditAdvertisementFullLogicComponent } from './add-edit-advertisement-full/add-edit-advertisement-full-logic.component';
import { AddAdvertisementService } from './add-edit-advertisement-full/services/add-advertisement.service';

@Component({
  selector: 'az-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.less'],
})
export class AddAdvertisementComponent
  extends AddEditAdvertisementFullLogicComponent
  implements OnInit
{
  constructor(
    protected override $advertisement: AddAdvertisementService,
    protected override fb: FormBuilder,
    protected override cd: ChangeDetectorRef,
    protected override router: Router,
    protected override route: ActivatedRoute,
    protected override $destroy: NgDestroy
  ) {
    super($advertisement, fb, cd, router, route, $destroy);
    this.data = this.route.snapshot.data['advertisment'];
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
