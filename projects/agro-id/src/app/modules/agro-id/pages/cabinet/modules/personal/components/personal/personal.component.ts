import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgDestroy } from 'ngx-az-core';
import { takeUntil } from 'rxjs';
import { Profile } from '../../models/profile.interface';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent implements OnInit {
  /**
   *
   */
  profile!: Profile;

  /**
   *
   */
  isVisibleModalEmail = false;

  /**
   *
   */
  isVisibleModalPhone = false;

  /**
   *
   */
  isVisibleModalLogin = false;

  /**
   *
   */
  isVisibleModalPassword = false;

  /**
   *
   */
  isVisibleModalFullname = false;

  /**
   *
   */
  isVisibleModalAvatar = false;

  /**
   *
   * @param $data
   * @param $destroy
   * @param cd
   */
  constructor(
    private $data: PersonalService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.getProfile();
  }

  /**
   *
   */
  getProfile() {
    this.$data
      .getProfile()
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        if (result.success) {
          this.profile = result.data;
        }
        this.cd.markForCheck();
      });
  }

  /**
   *
   */
  addEditEmail() {
    this.isVisibleModalEmail = true;
  }

  /**
   *
   */
  addEditPhone() {
    this.isVisibleModalPhone = true;
  }

  /**
   *
   */
  addEditLogin() {
    this.isVisibleModalLogin = true;
  }

  /**
   *
   */
  editPassword() {
    this.isVisibleModalPassword = true;
  }

  /**
   *
   */
  editFullname() {
    this.isVisibleModalFullname = true;
  }

  /**
   *
   */
  addEditAvatar() {
    this.isVisibleModalAvatar = true;
  }
}
