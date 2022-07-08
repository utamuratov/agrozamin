import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AddEditAdvertisementFullLogicComponent,
  AdvertisementResponse,
  NgDestroy,
} from 'ngx-az-core';
import { UserListItem } from '../dto/user-list-item.interface';
import { AddEditAdvertismentService } from '../services/add-edit-advertisment.service';
import { AdvertisementService } from '../services/advertisement.service';

@Component({
  selector: 'az-add-edit-advertisement',
  templateUrl: './add-edit-advertisement.component.html',
  styleUrls: ['./add-edit-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAdvertisementComponent
  extends AddEditAdvertisementFullLogicComponent
  implements OnInit
{
  /**
   *
   */
  id?: number;

  /**
   *
   */
  isAddMode!: boolean;

  /**
   *
   */
  userSearchText!: string;

  /**
   *
   */
  users: UserListItem[] = [];

  /**
   *
   */
  isVisibleRejectReasonModal = false;

  constructor(
    protected $addEditadvertisement: AddEditAdvertismentService,
    protected override fb: FormBuilder,
    protected override cd: ChangeDetectorRef,
    protected override router: Router,
    protected override route: ActivatedRoute,
    protected override $destroy: NgDestroy,
    private $adv: AdvertisementService
  ) {
    super($addEditadvertisement, fb, cd, router, route, $destroy);
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  /**
   *
   */
  override ngOnInit(): void {
    if (this.id) {
      this.getById(this.id);
      return;
    }

    super.ngOnInit();
  }
  /**
   *
   * @param id
   */
  private getById(id: number) {
    this.$advertisement.getAdvertisementForEditById(id).subscribe((result) => {
      if (result.success) {
        this.data = result.data;
        this.setUserSearchtext(this.data.announcement);
        super.ngOnInit();

        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   * @param searchText
   * @returns
   */
  getUsersBySearchText(searchText: string | object) {
    if (typeof searchText == 'object') {
      return;
    }

    if (searchText.length < 2) {
      this.users = [];
      this.cd.markForCheck();
      return;
    }

    this.$addEditadvertisement
      .getUsersBySearchText(searchText)
      .subscribe((result) => {
        this.users = result.data;

        this.cd.markForCheck();
      });
  }

  /**
   *
   * @returns
   */
  private setUserSearchtext(advertisement: AdvertisementResponse) {
    if (advertisement.created_for_user) {
      this.userSearchText = advertisement.created_for_user.username;
      return;
    }

    this.userSearchText = advertisement.created_by.username;
  }

  /**
   *
   */
  submitAndApprove() {
    this.submitForm();
  }

  /**
   *
   * @param id
   */
  approve(id: number) {
    this.$adv.approve(id).subscribe((result) => {
      if (result) {
        this.navigateToList();
      }
    });
  }

  /**
   *
   */
  override doAfterRequestFinished() {
    if (this.id) {
      this.approve(this.id);
    }
  }

  /**
   *
   * @param id
   */
  reject(id: number, reasonId: number) {
    this.$adv.reject(id, reasonId).subscribe((result) => {
      if (result) {
        this.navigateToList();
      }
    });
  }

  /**
   *
   */
  openRejectReasonModal() {
    this.isVisibleRejectReasonModal = true;
  }

  /**
   *
   * @param user
   */
  changeSelectedUser(user: UserListItem) {
    this.form.get('created_for_user')?.setValue(user.id);
  }

  /**
   *
   */
  private navigateToList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
