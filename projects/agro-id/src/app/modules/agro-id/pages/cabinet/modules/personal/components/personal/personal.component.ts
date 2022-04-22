import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../models/profile.interface';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent {
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
   * @param route
   */
  constructor(private route: ActivatedRoute) {
    this.profile = this.route.snapshot.data['profile'];
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
